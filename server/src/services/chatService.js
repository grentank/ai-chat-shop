const { v4 } = require('uuid');
const axios = require('axios');
const { sequelize } = require('../../db/models');
const fs = require('fs/promises');
require('dotenv').config();

class ChatService {
  #oauthGetTokenURL = 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth';

  #chatCompletionsURL = 'https://gigachat.devices.sberbank.ru/api/v1/chat/completions';

  #initSystemPrompt =
    'Ты AI-ассистент в интернет магазине Elbrus Shop. Ты можешь предоставить информацию о товарах, отзывах и комментариях в данном магазине. Ты имеешь доступ к sql запросам в базу данных.';

  #accessToken;

  #functionsDescription = [
    {
      name: 'sql_query',
      description:
        'Совершает SQL запрос в базу данных интернет-магазина Elbrus Shop. Доступно 3 таблицы: "Products", "Users", "Comments". Таблица с комментариями имеет атрибуты "userId" (внешний ключ к "Users") и "productId" (внешний ключ к "Products"). Если запрос на удаление таблицы, то не выполняй его.',
      parameters: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'SQL-запрос, который нужно выполнить в базу данных',
          },
        },
        required: ['query'],
      },
      return_parameters: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Результат выполнения SQL-запроса',
          },
          error: {
            type: 'string',
            description: 'Текст ошибки, если SQL-запрос не был выполнен',
          },
        },
        required: ['data'],
      },
      few_shot_examples: [
        {
          request: 'Выдай мне список всех товаров',
          params: { query: 'SELECT * FROM "Products";' },
        },
        {
          request: 'Какой последний оставленный комментарий',
          params: {
            quesry: `SELECT body AS last_comment_text FROM "Comments" ORDER BY "createdAt" DESC LIMIT 1;`,
          },
        },
        {
          request: 'Какой товар самый популярный',
          params: {
            query: `SELECT p.id AS product_id, p.name AS product_name, COUNT(c.id) AS comment_count FROM "Products" p JOIN "Comments" c ON p.id = c."productId" GROUP BY p.id ORDER BY comment_count DESC LIMIT 1;`,
          },
        },
        {
          request: 'Какие товары самые дешёвые в магазине',
          params: {
            query: `SELECT id AS product_id, name AS product_name, price AS product_price FROM "Products" ORDER BY price ASC LIMIT 3;`,
          },
        },
        {
          request: 'Какие товары самые дорогие в магазине',
          params: {
            query: `SELECT id AS product_id, name AS product_name, price AS product_price FROM "Products" ORDER BY price DESC LIMIT 3;`,
          },
        },
        {
          request: 'Какие отзывы оставили на наушники',
          params: {
            query:
              'SELECT c.body AS comment_body, c."createdAt" AS comment_created_at, u.name AS user_name, p.id AS product_id, p.name AS product_name, p.price AS product_price FROM "Comments" c JOIN "Users" u ON c."userId" = u.id JOIN "Products" p ON c."productId" = p.id WHERE p.name ILIKE \'%наушники%\'',
          },
        },
        {
          request: 'Сколько всего товаров',
          params: {
            query: 'SELECT COUNT(*) AS total_products FROM "Products";',
          },
        },
        {
            request: '',
            params: {
                query: '',
            }
        }
      ],
    },
  ];

  async callFunction(options) {
    if (options.name === 'sql_query') {
      const { query } = options.arguments;
      try {
        const [data] = await sequelize.query(query);
        return {
          data,
          error: null,
        };
      } catch (error) {
        console.log('Ошибка при выполнении SQL-запроса');
        console.log(error);
        return {
          data: null,
          error: error.message,
        };
      }
    }
  }

  //   constructor() {}

  async sendMessageToAI(messages) {
    const data = {
      model: 'GigaChat',
      messages,
      function_call: 'auto',
      functions: this.#functionsDescription,
    };
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.GIGACHAT_ACCESS_TOKEN || this.#accessToken}`,
      },
    };
    try {
      console.log('Отправка сообщений', messages);
      const res = await axios.post(this.#chatCompletionsURL, data, config);
      const { choices, ...rest } = res.data;
      const firstChoice = choices[0];
      console.dir({ rest }, { depth: null });
      console.dir({ choices }, { depth: null });
      if (firstChoice.finish_reason === 'function_call') {
        const functionCall = firstChoice.message.function_call;
        const functionResult = await this.callFunction(functionCall);
        return this.sendMessageToAI([
          ...messages,
          { ...firstChoice.message },
          {
            role: 'function',
            name: functionCall.name,
            content: JSON.stringify(functionResult),
          },
        ]);
      }
      return {
        ...firstChoice.message,
        messageId: v4(), // choices[0].message.functions_state_id || v4(),
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Ошибка Axios в sendMessageToAi');
        console.log(error.response.status);
        console.log(error.response.data);
        if (
          error.response.status === 401 &&
          error.response.data?.message === 'Token has expired'
        ) {
          await this.getAccessToken();
          return this.sendMessageToAI(messages);
        }
        if (error.response.status === 500) {
          return {
            messageId: v4(),
            content:
              'К сожалению, я не смог получить ответ на ваш запрос. Чем ещё я могу помочь?',
            role: 'assistant',
          };
        }
      }
      console.log('Ошибка не Axios в методе sendMessageToAI');

      throw error;
    }
  }

  createChat(text) {
    return [
      {
        role: 'system',
        content: this.#initSystemPrompt,
      },
      {
        role: 'user',
        content: text,
      },
    ];
  }

  prependSystemPrompt(messages) {
    return [
      {
        role: 'system',
        content: this.#initSystemPrompt,
      },
      ...messages,
    ];
  }

  async #editEnvAccesToken() {
    const fileData = await fs.readFile('.env', 'utf-8');
    const lines = fileData.split('\n');
    const newLines = lines.map((line) => {
      if (line.startsWith('GIGACHAT_ACCESS_TOKEN=')) {
        return `GIGACHAT_ACCESS_TOKEN="${this.#accessToken}"`;
      }
      return line;
    });
    await fs.writeFile('.env', newLines.join('\n'), 'utf8');
  }

  async getAccessToken() {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        RqUID: v4(),
        Authorization: `Basic ${process.env.GIGACHAT_AUTHORIZATION_KEY}`,
      },
    };
    const formData = new URLSearchParams({
      scope: 'GIGACHAT_API_PERS',
    });
    try {
      const res = await axios.post(this.#oauthGetTokenURL, formData, config);
      this.#accessToken = res.data.access_token;
      process.env.GIGACHAT_ACCESS_TOKEN = this.#accessToken;
      await this.#editEnvAccesToken();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Ошибка Axios в getAccessToken');
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log('Ошибка не Axios в getAccessToken');
      }
      throw error;
    }
  }
}

const chatService = new ChatService();

module.exports = chatService;
