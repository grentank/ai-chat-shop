import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatMessage from './ChatMessage';

const ChatAI = () => {
  const [showChat, setShowChat] = useState(false); // Состояние для отображения чата
  const [isMinimized, setIsMinimized] = useState(true); // Состояние для свернутого/развернутого вида

  // Обработчик для сворачивания/разворачивания виджета
  const toggleChat = () => {
    setShowChat(!showChat);
    setIsMinimized(!isMinimized);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        zIndex: 1000,
      }}
    >
      {/* Кнопка для открытия/закрытия чата */}
      {isMinimized && (
        <Button variant="dark" onClick={toggleChat}>
          Чат с AI
        </Button>
      )}

      {/* Окно чата */}
      <Offcanvas show={showChat} onHide={toggleChat} placement="end" style={{ width: '50%' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Чат с AI-ассистентом</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            {/* Область сообщений */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                marginBottom: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                padding: '10px',
              }}
            >
              <ChatMessage text="Привет! Чем могу помочь?" isUser={false} />
              <ChatMessage text="Привет! Как настроить уведомления?" isUser={true} />
              <ChatMessage
                text="Конечно! Перейдите в настройки и выберите раздел 'Уведомления'."
                isUser={false}
              />
            </div>

            {/* Поле ввода и кнопка отправки */}
            <div style={{ display: 'flex' }}>
              <input
                type="text"
                placeholder="Введите сообщение..."
                style={{
                  flex: 1,
                  marginRight: '10px',
                  padding: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                }}
              />
              <Button variant="outline-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                </svg>
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ChatAI;
