import React from 'react';
import { Container } from 'react-bootstrap';

const footerStyle = {
  backgroundColor: '#141414',
  borderTop: '1px solid #2a2a2a',
  padding: '3rem 0 2rem',
  marginTop: '4rem',
};

const brandStyle = {
  fontSize: '1.5rem',
  fontWeight: '100',
  letterSpacing: '6px',
  color: '#d4af37',
  textTransform: 'uppercase' as const,
  marginBottom: '1rem',
  textShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
};

const taglineStyle = {
  fontSize: '0.9rem',
  fontWeight: '300',
  letterSpacing: '2px',
  color: '#808080',
  textTransform: 'uppercase' as const,
  marginBottom: '2rem',
};

const dividerStyle = {
  width: '60px',
  height: '1px',
  background: '#d4af37',
  margin: '2rem auto',
};

const copyrightStyle = {
  fontSize: '0.85rem',
  color: '#666666',
  fontWeight: '300',
  letterSpacing: '1px',
  textAlign: 'center' as const,
};

const demoNoticeStyle = {
  fontSize: '0.8rem',
  color: '#808080',
  fontWeight: '300',
  textAlign: 'center' as const,
  marginTop: '1rem',
  fontStyle: 'italic',
};

export default function Footer(): React.JSX.Element {
  return (
    <footer style={footerStyle}>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <div style={brandStyle}>AMA SHOP</div>
          <div style={taglineStyle}>Премиальные товары</div>
          <div style={dividerStyle} />
          <div style={copyrightStyle}>© 2025 AMA Shop. Все права защищены.</div>
          <div style={demoNoticeStyle}>Демо-версия для доклада о безопасности</div>
        </div>
      </Container>
    </footer>
  );
}
