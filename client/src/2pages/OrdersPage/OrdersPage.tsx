import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import MOCK_ORDERS from '../../5entities/orders/model/orders';

export default function OrdersPage(): React.JSX.Element {
  return (
    <Container style={{ marginTop: '20px' }}>
      <h2>История заказов</h2>
      <Row>
        {MOCK_ORDERS.map((order) => (
          <Col key={order.id} md={12} style={{ marginBottom: '15px' }}>
            <Card>
              <Card.Body
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div>
                  <Card.Title>{order.fullname}</Card.Title>
                  <Card.Text>
                    <strong>Адрес:</strong> {order.address}
                    <br />
                    <strong>Телефон:</strong> {order.phone}
                  </Card.Text>
                </div>
                <h5 style={{ margin: 0 }}>{order.cost} ₽</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
