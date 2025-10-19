import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
        <div style={markdownStyle}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Стилизация для разных элементов markdown
              h1: ({ node, ...props }) => (
                <h1
                  style={{
                    color: role === 'user' ? '#d4af37' : '#e0e0e0',
                    fontSize: '1.5rem',
                    margin: '0.5em 0',
                  }}
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  style={{
                    color: role === 'user' ? '#d4af37' : '#d0d0d0',
                    fontSize: '1.3rem',
                    margin: '0.5em 0',
                  }}
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  style={{
                    color: role === 'user' ? '#d4af37' : '#c0c0c0',
                    fontSize: '1.1rem',
                    margin: '0.5em 0',
                  }}
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  style={{
                    margin: '0.5em 0',
                    paddingLeft: '1.5em',
                    color: role === 'user' ? '#d4af37' : '#b3b3b3',
                  }}
                  {...props}
                />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  style={{
                    margin: '0.5em 0',
                    paddingLeft: '1.5em',
                    color: role === 'user' ? '#d4af37' : '#b3b3b3',
                  }}
                  {...props}
                />
              ),
              li: ({ node, ...props }) => <li style={{ margin: '0.25em 0' }} {...props} />,
              table: ({ node, ...props }) => (
                <table
                  style={{
                    borderCollapse: 'collapse',
                    margin: '0.5em 0',
                    width: '100%',
                    border: `1px solid ${role === 'user' ? 'rgba(212, 175, 55, 0.3)' : '#2a2a2a'}`,
                  }}
                  {...props}
                />
              ),
              th: ({ node, ...props }) => (
                <th
                  style={{
                    border: `1px solid ${role === 'user' ? 'rgba(212, 175, 55, 0.3)' : '#2a2a2a'}`,
                    padding: '8px',
                    backgroundColor: role === 'user' ? 'rgba(212, 175, 55, 0.1)' : '#2a2a2a',
                    fontWeight: 'bold',
                  }}
                  {...props}
                />
              ),
              td: ({ node, ...props }) => (
                <td
                  style={{
                    border: `1px solid ${role === 'user' ? 'rgba(212, 175, 55, 0.3)' : '#2a2a2a'}`,
                    padding: '8px',
                  }}
                  {...props}
                />
              ),
              code: ({ node, inline, ...props }: any) =>
                inline ? (
                  <code
                    style={{
                      backgroundColor: role === 'user' ? 'rgba(212, 175, 55, 0.2)' : '#2a2a2a',
                      padding: '2px 4px',
                      borderRadius: '3px',
                      fontFamily: 'monospace',
                    }}
                    {...props}
                  />
                ) : (
                  <code
                    style={{
                      display: 'block',
                      backgroundColor: role === 'user' ? 'rgba(212, 175, 55, 0.2)' : '#2a2a2a',
                      padding: '8px',
                      borderRadius: '4px',
                      fontFamily: 'monospace',
                      overflowX: 'auto',
                      margin: '0.5em 0',
                    }}
                    {...props}
                  />
                ),
              a: ({ node, ...props }) => (
                <a
                  style={{
                    color: role === 'user' ? '#d4af37' : '#6699cc',
                    textDecoration: 'underline',
                  }}
                  {...props}
                />
              ),
              p: ({ node, ...props }) => <p style={{ margin: '0.5em 0' }} {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
