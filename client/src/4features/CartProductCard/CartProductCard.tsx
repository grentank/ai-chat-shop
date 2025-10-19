import React from 'react';
import { Button, Card } from 'react-bootstrap';
import type { ProductT } from '../../5entities/products/model/products.schema';

type CartProductCardProps = {
  item: ProductT;
};

const cardStyle = {
  marginBottom: '1.5rem',
  backgroundColor: '#1e1e1e',
  border: '1px solid #2a2a2a',
  transition: 'border-color 0.3s ease',
};

const imageStyle = {
  width: '80px',
  height: '80px',
  objectFit: 'contain' as const,
  marginRight: '1.5rem',
  backgroundColor: '#141414',
  padding: '8px',
  border: '1px solid #2a2a2a',
};

const titleStyle = {
  marginBottom: '0',
  fontSize: '1rem',
  fontWeight: '300',
  color: '#ffffff',
  letterSpacing: '0.5px',
};

const quantityContainer = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '2rem',
  gap: '10px',
};

const quantityButton = {
  backgroundColor: 'transparent',
  borderColor: '#2a2a2a',
  color: '#b3b3b3',
  fontWeight: 'bold',
  width: '2rem',
  height: '2rem',
  padding: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
};

const quantityText = {
  color: '#b3b3b3',
  fontSize: '0.95rem',
  fontWeight: '300',
  minWidth: '50px',
  textAlign: 'center' as const,
};

const priceStyle = {
  fontSize: '1.3rem',
  fontWeight: '300',
  color: '#d4af37',
  margin: 0,
};

export default function CartProductCard({ item }: CartProductCardProps): React.JSX.Element {
  return (
    <Card style={cardStyle}>
      <Card.Body style={{ display: 'flex', alignItems: 'center', padding: '1.5rem' }}>
        <img src={item.image} alt={item.name} style={imageStyle} />
        <div style={{ flex: 1 }}>
          <Card.Title style={titleStyle}>{item.name}</Card.Title>
        </div>
        <div style={quantityContainer}>
          <Button
            variant="outline-secondary"
            size="sm"
            style={quantityButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#d4af37';
              e.currentTarget.style.color = '#d4af37';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2a2a2a';
              e.currentTarget.style.color = '#b3b3b3';
            }}
          >
            -
          </Button>
          <span style={quantityText}>1 шт</span>
          <Button
            variant="outline-secondary"
            size="sm"
            style={quantityButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#d4af37';
              e.currentTarget.style.color = '#d4af37';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2a2a2a';
              e.currentTarget.style.color = '#b3b3b3';
            }}
          >
            +
          </Button>
        </div>

        <div>
          <h5 style={priceStyle}>{item.price.toLocaleString()} ₽</h5>
        </div>
      </Card.Body>
    </Card>
  );
}
