import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import MOCK_ORDERS from '../../5entities/orders/model/orders';

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

const orderCard = {
  padding: '2rem',
  backgroundColor: '#1e1e1e',
  border: '1px solid #2a2a2a',
  marginBottom: '1.5rem',
  transition: 'border-color 0.3s ease',
};

const orderTitle = {
  fontSize: '1.2rem',
  fontWeight: '300',
  color: '#d4af37',
  letterSpacing: '1px',
  marginBottom: '1rem',
};

const orderDetail = {
  color: '#b3b3b3',
  fontSize: '0.95rem',
  lineHeight: '1.7',
  marginBottom: '0.5rem',
};

const orderLabel = {
  color: '#808080',
  fontWeight: '300',
  marginRight: '0.5rem',
};

const orderPrice = {
  fontSize: '1.5rem',
  fontWeight: '300',
  color: '#d4af37',
  margin: 0,
};

export default function OrdersPage(): React.JSX.Element {
  return (
    <Container style={{ marginTop: '40px', marginBottom: '60px' }}>
      <h2 style={pageTitle}>История заказов</h2>
      <div style={divider} />
      <Row>
        {MOCK_ORDERS.map((order) => (
          <Col key={order.id} md={12}>
            <Card style={orderCard}>
              <Card.Body
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div style={{ flex: 1 }}>
                  <Card.Title style={orderTitle}>{order.fullname}</Card.Title>
                  <Card.Text style={orderDetail}>
                    <span style={orderLabel}>Адрес:</span> {order.address}
                    <br />
                    <span style={orderLabel}>Телефон:</span> {order.phone}
                  </Card.Text>
                </div>
                <h5 style={orderPrice}>{order.cost.toLocaleString()} ₽</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
