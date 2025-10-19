import React from 'react';
import { ChatMessageT } from '../model/chatMessage.schema';

type ChatMessageProps = {
  message: ChatMessageT;
};

const ChatMessage = ({ message: { content, role } }: ChatMessageProps) => {
  // Стили для сообщений AI - темная тема
  const aiMessageStyle = {
    backgroundColor: '#1e1e1e',
    border: '1px solid #2a2a2a',
    borderRadius: '8px 8px 8px 0',
    padding: '12px 16px',
    margin: '8px 0',
    maxWidth: '85%',
    alignSelf: 'flex-start',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  };

  // Стили для сообщений пользователя - темная тема с акцентом
  const userMessageStyle = {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    border: '1px solid rgba(212, 175, 55, 0.3)',
    borderRadius: '8px 8px 0 8px',
    padding: '12px 16px',
    margin: '8px 0',
    maxWidth: '85%',
    alignSelf: 'flex-end',
    boxShadow: '0 2px 8px rgba(212, 175, 55, 0.2)',
  };

  const textStyle = {
    margin: 0,
    color: role === 'user' ? '#d4af37' : '#b3b3b3',
    fontSize: '0.95rem',
    lineHeight: '1.6',
  };

  const labelStyle = {
    fontSize: '0.75rem',
    fontWeight: '300',
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
    color: role === 'user' ? '#d4af37' : '#808080',
    marginBottom: '6px',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: role === 'user' ? 'flex-end' : 'flex-start',
      }}
    >
      <div style={role === 'user' ? userMessageStyle : aiMessageStyle}>
        <div style={labelStyle}>{role === 'user' ? 'Вы' : 'AI-ассистент'}</div>
        <p style={textStyle} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default ChatMessage;
