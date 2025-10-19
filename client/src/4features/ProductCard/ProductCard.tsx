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
        <div style={styles.imageOverlay} data-overlay="true">
          <span style={styles.viewDetails}>Подробнее</span>
        </div>
      </div>
      <Card.Body style={styles.cardBody}>
        <p style={styles.productName}>
          {product.name.slice(0, 42)}
          {product.name.length > 42 && '...'}
        </p>
        <div style={styles.priceContainer}>
          <div style={styles.priceRow}>
            <span style={styles.currentPrice}>{product.price.toLocaleString()} ₽</span>
            <span style={styles.discount}>-66%</span>
          </div>
          <span style={styles.fullPrice}>
            {(product.price * 3).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}
