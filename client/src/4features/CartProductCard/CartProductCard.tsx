import React from 'react';
import { Button, Card } from 'react-bootstrap';
import type { ProductT } from '../../5entities/products/model/products.schema';

type CartProductCardProps = {
  item: ProductT;
};

export default function CartProductCard({ item }: CartProductCardProps): React.JSX.Element {
  return (
    <Card style={{ marginBottom: '15px' }}>
      <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={item.image}
          alt={item.name}
          style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '20px' }}
        />
        <div style={{ flex: 1 }}>
          <Card.Title style={{ marginBottom: '0' }}>{item.name}</Card.Title>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <Button
            variant="outline-secondary"
            size="sm"
            style={{ marginRight: '5px', fontWeight: 'bold', width: '1.7rem' }}
          >
            -
          </Button>
          <span>1 шт</span>
          <Button
            variant="outline-secondary"
            size="sm"
            style={{ marginLeft: '5px', fontWeight: 'bold', width: '1.7rem' }}
          >
            +
          </Button>
        </div>

        <div>
          <h5>{item.price} ₽</h5>
        </div>
      </Card.Body>
    </Card>
  );
}
