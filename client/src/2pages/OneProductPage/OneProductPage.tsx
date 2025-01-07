import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as styles from './styles';
import MOCK_PRODUCTS from '../../5entities/products/model/products';

export default function OneProductPage(): React.JSX.Element {
  const product = MOCK_PRODUCTS[0];
  if (!product) return <p>загрузка...</p>;

  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        <Col md={6} style={{ textAlign: 'center' }}>
          <img src={product.image} alt={product.name} style={styles.prodImg} />
        </Col>

        <Col md={6}>
          <h1>{product.name}</h1>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ display: 'inline-block', marginRight: '10px' }}>{product.price} ₽</h3>
            <span style={styles.highPrice}>{(product.price * 3).toFixed(2)} ₽</span>
            <span style={styles.discountAmount}>-66%</span>
          </div>
          <Button variant="dark" size="lg" style={styles.buyButton}>
            Добавить в корзину
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: '30px' }}>
        <Col>
          <h4>Описание товара</h4>
          <p>{product.description}</p>
        </Col>
      </Row>

      <Row style={{ marginTop: '30px' }}>
        <Col>
          <p style={{ fontStyle: 'italic', color: 'gray' }}>
            Никто пока не оставил комментарий к данному товару.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
