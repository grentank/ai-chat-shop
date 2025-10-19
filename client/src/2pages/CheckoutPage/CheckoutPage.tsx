import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import SBPIcon from '../../6shared/ui/SBPIcon';

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
  marginBottom: '3rem',
};

const formGroup = {
  marginBottom: '2rem',
};

const formLabel = {
  fontSize: '0.95rem',
  fontWeight: '300',
  letterSpacing: '1px',
  color: '#b3b3b3',
  marginBottom: '0.75rem',
};

const totalSection = {
  marginTop: '3rem',
  padding: '2rem',
  backgroundColor: '#1e1e1e',
  border: '1px solid #2a2a2a',
  marginBottom: '2rem',
};

const totalText = {
  fontSize: '1.5rem',
  fontWeight: '300',
  color: '#d4af37',
  margin: 0,
  letterSpacing: '1px',
};

const submitButton = {
  width: '100%',
  height: '60px',
  fontSize: '1.1rem',
  fontWeight: '400',
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  backgroundColor: '#d4af37',
  borderColor: '#d4af37',
  color: '#000000',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
};

export default function CheckoutPage(): React.JSX.Element {
  return (
    <Container style={{ marginTop: '40px', marginBottom: '60px' }}>
      <Row>
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <h2 style={pageTitle}>Оформление заказа</h2>
          <div style={divider} />
          <Form>
            <Form.Group controlId="formFullName" style={formGroup}>
              <Form.Label style={formLabel}>Полное имя</Form.Label>
              <Form.Control name="fullname" type="text" placeholder="Введите полное имя" required />
            </Form.Group>

            <Form.Group controlId="formAddress" style={formGroup}>
              <Form.Label style={formLabel}>Адрес доставки</Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder="Введите адрес доставки"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone" style={formGroup}>
              <Form.Label style={formLabel}>Телефонный номер</Form.Label>
              <Form.Control name="phone" type="tel" placeholder="Введите номер телефона" required />
            </Form.Group>

            <div style={totalSection}>
              <h4 style={totalText}>Сумма заказа: 500 ₽</h4>
            </div>

            <Button type="submit" style={submitButton}>
              Оплатить &nbsp;
              <SBPIcon />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
