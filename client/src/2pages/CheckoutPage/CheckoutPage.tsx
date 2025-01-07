import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import SBPIcon from '../../6shared/ui/SBPIcon';

export default function CheckoutPage(): React.JSX.Element {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Оформление заказа</h2>
          <Form>
            <Form.Group controlId="formFullName" style={{ marginBottom: '15px' }}>
              <Form.Label>Полное имя</Form.Label>
              <Form.Control name="fullname" type="text" placeholder="Введите полное имя" required />
            </Form.Group>

            <Form.Group controlId="formAddress" style={{ marginBottom: '15px' }}>
              <Form.Label>Адрес доставки</Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder="Введите адрес доставки"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone" style={{ marginBottom: '15px' }}>
              <Form.Label>Телефонный номер</Form.Label>
              <Form.Control name="phone" type="tel" placeholder="Введите номер телефона" required />
            </Form.Group>

            <h4 style={{ marginTop: '30px' }}>Сумма заказа: 500 ₽</h4>

            <Button
              variant="light"
              type="submit"
              style={{
                width: '100%',
                marginTop: '20px',
                height: '50px',
                fontSize: '1.2rem',
              }}
            >
              Оплатить &nbsp;
              <SBPIcon />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
