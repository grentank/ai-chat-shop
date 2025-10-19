import React, { useMemo } from 'react';
import { marked } from 'marked';
import { ChatMessageT } from '../model/chatMessage.schema';

// Настройка marked для поддержки GFM (GitHub Flavored Markdown)
marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Переносы строк
  pedantic: false,
});

type ChatMessageProps = {
  message: ChatMessageT;
};

const ChatMessage = ({ message: { content, role } }: ChatMessageProps) => {
  // Конвертируем markdown в HTML (небезопасно - для демонстрации XSS)
  const htmlContent = useMemo(() => {
    try {
      return marked.parse(content) as string;
    } catch (error) {
      console.error('Markdown parsing error:', error);
      return content;
    }
  }, [content]);

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

  const markdownStyle = {
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
        <div
          style={markdownStyle}
          className={`markdown-content ${role}`}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
        <style>{`
          .markdown-content h1 {
            color: ${role === 'user' ? '#d4af37' : '#e0e0e0'};
            font-size: 1.5rem;
            margin: 0.5em 0;
          }
          .markdown-content h2 {
            color: ${role === 'user' ? '#d4af37' : '#d0d0d0'};
            font-size: 1.3rem;
            margin: 0.5em 0;
          }
          .markdown-content h3 {
            color: ${role === 'user' ? '#d4af37' : '#c0c0c0'};
            font-size: 1.1rem;
            margin: 0.5em 0;
          }
          .markdown-content ul, .markdown-content ol {
            margin: 0.5em 0;
            padding-left: 1.5em;
          }
          .markdown-content li {
            margin: 0.25em 0;
          }
          .markdown-content table {
            border-collapse: collapse;
            margin: 0.5em 0;
            width: 100%;
            border: 1px solid ${role === 'user' ? 'rgba(212, 175, 55, 0.3)' : '#2a2a2a'};
          }
          .markdown-content th {
            border: 1px solid ${role === 'user' ? 'rgba(212, 175, 55, 0.3)' : '#2a2a2a'};
            padding: 8px;
            background-color: ${role === 'user' ? 'rgba(212, 175, 55, 0.1)' : '#2a2a2a'};
            font-weight: bold;
          }
          .markdown-content td {
            border: 1px solid ${role === 'user' ? 'rgba(212, 175, 55, 0.3)' : '#2a2a2a'};
            padding: 8px;
          }
          .markdown-content code {
            background-color: ${role === 'user' ? 'rgba(212, 175, 55, 0.2)' : '#2a2a2a'};
            padding: 2px 4px;
            border-radius: 3px;
            font-family: monospace;
          }
          .markdown-content pre {
            background-color: ${role === 'user' ? 'rgba(212, 175, 55, 0.2)' : '#2a2a2a'};
            padding: 8px;
            border-radius: 4px;
            overflow-x: auto;
            margin: 0.5em 0;
          }
          .markdown-content pre code {
            padding: 0;
            background-color: transparent;
          }
          .markdown-content a {
            color: ${role === 'user' ? '#d4af37' : '#6699cc'};
            text-decoration: underline;
          }
          .markdown-content p {
            margin: 0.5em 0;
          }
          .markdown-content p:first-child {
            margin-top: 0;
          }
          .markdown-content p:last-child {
            margin-bottom: 0;
          }
          .markdown-content blockquote {
            border-left: 3px solid ${role === 'user' ? '#d4af37' : '#6699cc'};
            padding-left: 1em;
            margin: 0.5em 0;
            color: ${role === 'user' ? 'rgba(212, 175, 55, 0.8)' : '#999'};
          }
          .markdown-content strong {
            font-weight: bold;
            color: ${role === 'user' ? '#f5d06e' : '#e0e0e0'};
          }
          .markdown-content em {
            font-style: italic;
          }
          .markdown-content hr {
            border: none;
            border-top: 1px solid ${role === 'user' ? 'rgba(212, 175, 55, 0.3)' : '#2a2a2a'};
            margin: 1em 0;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ChatMessage;
