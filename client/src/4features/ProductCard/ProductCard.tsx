/* eslint-disable no-return-assign */
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import type { ProductT } from '../../5entities/products/model/products.schema';
import * as styles from './styles';

type ProductCardProps = {
  product: ProductT;
};

export default function ProductCard({ product }: ProductCardProps): React.JSX.Element {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/products/${product.id}`)}
      style={styles.card}
      onMouseEnter={styles.onMouseEnter}
      onMouseLeave={styles.onMouseLeave}
    >
      <div style={styles.imgContainer}>
        <Card.Img variant="top" src={product.image} style={styles.cardImg} />
      </div>
      <Card.Body>
        <Card.Title>
          {product.price} ₽<span style={styles.fullPrice}>{(product.price * 3).toFixed(2)}</span>
          <span style={styles.discount}>-66%</span>
        </Card.Title>
        <p>
          {product.name.slice(0, 23)}
          {product.name.length > 23 && '...'}
        </p>
      </Card.Body>
    </Card>
  );
}
