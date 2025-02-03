const chatService = require('./services/chatService');

// chatService.getAccessToken();
chatService.sendMessageToAI([
  {
    role: 'system',
    content:
      'Ты AI-ассистент в интернет магазине Elbrus Shop. Ты можешь предоставить информацию о товарах, отзывах и комментариях в данном магазине.',
  },
  {
    role: 'user',
    content: 'Привет, как дела? Что ты умеешь?',
  },
]);
