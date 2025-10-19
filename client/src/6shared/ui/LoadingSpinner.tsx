import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#0a0a0a',
};

const spinnerStyle = {
  height: '80px',
  width: '80px',
  color: '#d4af37',
};

const loadingText = {
  marginTop: '2rem',
  color: '#b3b3b3',
  fontSize: '1.1rem',
  fontWeight: '300',
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
};

export default function LoadingSpinner() {
  return (
    <div style={containerStyle}>
      <Spinner style={spinnerStyle} animation="border" role="status">
        <span className="visually-hidden">Загрузка продолжается</span>
      </Spinner>
      <div style={loadingText}>Загрузка...</div>
    </div>
  );
}
