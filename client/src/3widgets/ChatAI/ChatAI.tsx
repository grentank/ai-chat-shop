import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Offcanvas, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatMessage from '../../5entities/chatMessage/ui/ChatMessage';
import { useAppDispatch, useAppSelector } from '../../6shared/lib/hooks';
import {
  addUserMessageThunk,
  createChatThunk,
  toggleChat,
} from '../../5entities/chatMessage/model/chatSlice';
import { setTextByKey } from '../../4features/preparedPrompts';
import { getProductsThunk } from '../../5entities/products/model/productsSlice';
import DatabaseDroppedIcon from '../../6shared/ui/DatabaseDroppedIcon';

const ChatAI = () => {
  const dispatch = useAppDispatch();
  const toggle = () => {
    dispatch(toggleChat());
  };

  const { showChat, messages, sending, dbDropped } = useAppSelector((store) => store.chat);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      requestAnimationFrame(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
      });
    }
  }, [messages]);

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current!.style.height = 'auto';
    textareaRef.current!.style.height = `${textareaRef.current!.scrollHeight}px`;
  }, [input]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(getProductsThunk());
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [messages]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        zIndex: 1000,
      }}
    >
      {!showChat && (
        <Button variant="dark" onClick={toggle}>
          Чат с AI
        </Button>
      )}

      <Offcanvas show={showChat} onHide={toggle} placement="end" style={{ width: '50%' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Чат с AI-ассистентом {dbDropped && <DatabaseDroppedIcon />}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <div
              ref={messagesEndRef}
              style={{
                flex: 1,
                overflowY: 'auto',
                marginBottom: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                padding: '10px',
              }}
            >
              {messages.map((message) => (
                <ChatMessage key={message.messageId} message={message} />
              ))}
            </div>

            <form
              style={{ display: 'flex' }}
              onSubmit={(e) => {
                e.preventDefault();
                if (messages.length <= 1) {
                  dispatch(createChatThunk(input));
                } else {
                  dispatch(addUserMessageThunk({ messages, text: input }));
                }
                setInput('');
              }}
            >
              <Form.Control
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    if (messages.length <= 1) {
                      dispatch(createChatThunk(input));
                    } else {
                      dispatch(addUserMessageThunk({ messages, text: input }));
                    }
                    setInput('');
                  }
                  if (e.altKey) {
                    setTextByKey(e.key, setInput);
                  }
                }}
                as="textarea"
                disabled={sending}
                ref={textareaRef}
                placeholder="Введите сообщение..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                  flex: 1,
                  marginRight: '10px',
                  padding: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  minHeight: '50%',
                  resize: 'none',
                  overflow: 'hidden',
                }}
              />
              <Button disabled={sending} type="submit" variant="outline-dark">
                {sending ? (
                  <Spinner
                    style={{
                      height: '16px',
                      width: '16px',
                    }}
                  />
                ) : (
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
                )}
              </Button>
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ChatAI;
