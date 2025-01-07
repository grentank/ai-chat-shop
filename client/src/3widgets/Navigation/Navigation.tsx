import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';
import CartIcon from '../../6shared/ui/CartIcon';

export default function Navigation(): React.JSX.Element {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: '1.5rem' }}>
          Эльбрус-шоп
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Товары
          </Nav.Link>
          <Nav.Link as={NavLink} to="/orders">
            Заказы
          </Nav.Link>
          <Nav.Link href="/api-docs">Документация API</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/cart">
            Корзина <CartIcon />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
