import React from 'react';

type ChatMessageProps = {
  text: string;
  isUser: boolean;
};

const ChatMessage = ({ text, isUser }: ChatMessageProps) => {
  // Стили для сообщений AI
  const aiMessageStyle = {
    backgroundColor: '#eaf4ea', // Серо-голубой фон
    borderRadius: '15px 15px 15px 0', // Закругление углов
    padding: '10px',
    margin: '5px 0',
    maxWidth: '80%',
    alignSelf: 'flex-start', // Выравнивание по левому краю
  };

  // Стили для сообщений пользователя
  const userMessageStyle = {
    backgroundColor: '#e3f2fd', // Легкий голубоватый фон
    borderRadius: '15px 15px 0 15px', // Закругление углов
    padding: '10px',
    margin: '5px 0',
    maxWidth: '80%',
    alignSelf: 'flex-end', // Выравнивание по правому краю
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isUser ? 'flex-end' : 'flex-start',
      }}
    >
      <div style={isUser ? userMessageStyle : aiMessageStyle}>
        <p style={{ margin: 0 }}>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
