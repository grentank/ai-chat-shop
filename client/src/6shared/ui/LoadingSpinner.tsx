import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingSpinner() {
    return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200vh',
          }}
        >
          <Spinner
            style={{
              height: '100px',
              width: '100px',
            }}
            animation="grow"
            role="status"
          >
            <span className="visually-hidden">Загрузка продолжается</span>
          </Spinner>
        </div>
      );
}
