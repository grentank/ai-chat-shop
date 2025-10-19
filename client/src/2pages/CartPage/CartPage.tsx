import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import CartProductCard from '../../4features/CartProductCard/CartProductCard';
import MOCK_PRODUCTS from '../../5entities/products/model/products';

const pageTitle = {
  fontSize: '1.8rem',
  fontWeight: '300',
  letterSpacing: '4px',
  color: '#ffffff',
  textTransform: 'uppercase' as const,
  marginBottom: '1rem',
};

const divider = {
  width: '60px',
  height: '1px',
  background: '#d4af37',
  marginBottom: '2rem',
};

const emptyCart = {
  textAlign: 'center' as const,
  color: '#666666',
  fontSize: '1.1rem',
  padding: '3rem 0',
  fontStyle: 'italic',
};

const summaryCard = {
  padding: '2rem',
  backgroundColor: '#1e1e1e',
  border: '1px solid #2a2a2a',
  position: 'sticky' as const,
  top: '100px',
};

const summaryTitle = {
  fontSize: '1.3rem',
  fontWeight: '300',
  letterSpacing: '2px',
  color: '#ffffff',
  marginBottom: '1.5rem',
};

const totalPrice = {
  fontSize: '2rem',
  fontWeight: '300',
  color: '#d4af37',
  marginBottom: '2rem',
};

const checkoutButton = {
  width: '100%',
  height: '60px',
  fontSize: '1rem',
  fontWeight: '400',
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  backgroundColor: '#d4af37',
  borderColor: '#d4af37',
  color: '#000000',
  transition: 'all 0.3s ease',
};

export default function CartPage(): React.JSX.Element {
  const navigate = useNavigate();
  return (
    <Container style={{ marginTop: '40px', marginBottom: '60px' }}>
      <h2 style={pageTitle}>Корзина</h2>
      <div style={divider} />
      <Row>
        <Col md={8}>
          {[...MOCK_PRODUCTS].length === 0 ? (
            <p style={emptyCart}>Ваша корзина пуста</p>
          ) : (
            MOCK_PRODUCTS.map((item) => <CartProductCard item={item} key={item.id} />)
          )}
        </Col>
        <Col md={4}>
          <Card style={summaryCard}>
            <Card.Body>
              <h4 style={summaryTitle}>Итого</h4>
              <div style={totalPrice}>500 ₽</div>
              <Button style={checkoutButton} onClick={() => navigate('/checkout')}>
                Оформить заказ
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
