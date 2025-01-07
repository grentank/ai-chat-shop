import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import CartProductCard from '../../4features/CartProductCard/CartProductCard';
import MOCK_PRODUCTS from '../../5entities/products/model/products';

export default function CartPage(): React.JSX.Element {
  const navigate = useNavigate();
  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        <Col md={8}>
          {[...MOCK_PRODUCTS].length === 0 ? (
            <p>Ваша корзина пуста</p>
          ) : (
            MOCK_PRODUCTS.map((item) => <CartProductCard item={item} key={item.id} />)
          )}
        </Col>
        <Col md={4}>
          <Card style={{ padding: '20px' }}>
            <Card.Body>
              <h4>Сумма заказа: 500 ₽</h4>
              <Button
                variant="primary"
                style={{ width: '100%', marginTop: '20px', height: '50px', fontSize: '1.2rem' }}
                onClick={() => navigate('/checkout')}
              >
                Оформить заказ
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
