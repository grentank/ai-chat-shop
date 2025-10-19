const chatLangchainRouter = require('express').Router();
const chatServiceLangchain = require('../services/chatServiceLangchain');
const axios = require('axios');

chatLangchainRouter.post('/', async (req, res) => {
  try {
    const { text, messages: oldMessages } = req.body;

    // Формируем историю сообщений
    const messages = [
      ...oldMessages.map(({ content, role }) => ({ content, role })),
      { role: 'user', content: text },
    ];

    const responseMessage = await chatServiceLangchain.sendMessageToAI(messages);
    res.json(responseMessage);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error in POST /:', error.response?.data || error.message);
    } else {
      console.error('Error in POST /:', error);
    }
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

chatLangchainRouter.post('/init', async (req, res) => {
  try {
    const { text } = req.body;
    const messages = chatServiceLangchain.createChat(text);
    const responseMessage = await chatServiceLangchain.sendMessageToAI(messages);
    res.json(responseMessage);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error in POST /init:', error.response?.data || error.message);
    } else {
      console.error('Error in POST /init:', error);
    }
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

module.exports = chatLangchainRouter;
