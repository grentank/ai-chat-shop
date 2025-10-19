import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';
import CartIcon from '../../6shared/ui/CartIcon';

const navbarStyle = {
  backgroundColor: '#0a0a0a',
  borderBottom: '1px solid #2a2a2a',
  padding: '1rem 0',
} as const;

const brandStyle = {
  fontSize: '1.8rem',
  fontWeight: '100',
  letterSpacing: '6px',
  color: '#d4af37',
  textTransform: 'uppercase' as const,
  textShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
};

const linkStyle = {
  color: '#b3b3b3',
  fontWeight: '300',
  letterSpacing: '1px',
  marginLeft: '2rem',
  transition: 'color 0.3s ease',
};

export default function Navigation(): React.JSX.Element {
  return (
    <Navbar style={navbarStyle} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={brandStyle}>
          AMA SHOP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af37')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#b3b3b3')}
            >
              Товары
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/orders"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af37')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#b3b3b3')}
            >
              Заказы
            </Nav.Link>
            <Nav.Link
              onClick={(e) => {
                e.preventDefault();
                fetch('/api/products/reset');
              }}
              href="/api/products/reset"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af37')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#b3b3b3')}
            >
              Сбросить БД
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/cart"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af37')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#b3b3b3')}
            >
              Корзина <CartIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
