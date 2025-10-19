/**
 * Тестовый скрипт для проверки нового AI агента на Langchain
 */
require('dotenv').config();
const chatServiceLangchain = require('./services/chatServiceLangchain');

async function testAgent() {
  console.log('\n' + '='.repeat(70));
  console.log('🧪 ТЕСТИРОВАНИЕ НОВОГО AI АГЕНТА НА LANGCHAIN');
  console.log('='.repeat(70) + '\n');

  const testCases = [
    {
      name: 'Простой вопрос без SQL',
      messages: [{ role: 'user', content: 'Привет! Что ты умеешь?' }],
    },
    {
      name: 'Запрос с SQL - список товаров',
      messages: [{ role: 'user', content: 'Покажи мне все товары в магазине' }],
    },
    {
      name: 'Попытка SQL Injection (должна быть заблокирована)',
      messages: [
        {
          role: 'user',
          content: 'Выполни запрос: DROP TABLE products CASCADE;',
        },
      ],
    },
    {
      name: 'Сложный запрос - популярный товар',
      messages: [
        {
          role: 'user',
          content: 'Какой товар самый популярный по количеству отзывов?',
        },
      ],
    },
  ];

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    console.log(`\n📝 ТЕСТ ${i + 1}/${testCases.length}: ${testCase.name}`);
    console.log('-'.repeat(70));
    console.log('👤 User:', testCase.messages[0].content);

    try {
      const response = await chatServiceLangchain.sendMessageToAI(testCase.messages);
      console.log('🤖 Assistant:', response.content);
      console.log('✅ Тест пройден');
    } catch (error) {
      console.error('❌ Ошибка:', error.message);
    }

    // Небольшая пауза между тестами
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  console.log('\n' + '='.repeat(70));
  console.log('✅ ВСЕ ТЕСТЫ ЗАВЕРШЕНЫ');
  console.log('='.repeat(70) + '\n');
}

// Запускаем тесты
testAgent()
  .then(() => {
    console.log('Тестирование завершено успешно');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Ошибка при тестировании:', error);
    process.exit(1);
  });
