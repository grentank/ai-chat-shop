import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Navigation from '../../3widgets/Navigation/Navigation';
import ChatAI from '../../3widgets/ChatAI/ChatAI';
import Footer from '../../3widgets/Footer/Footer';

const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#0a0a0a',
  display: 'flex',
  flexDirection: 'column' as const,
};

const mainContentStyle = {
  flex: '1',
};

export default function Layout() {
  return (
    <div style={containerStyle}>
      <Navigation />
      <div style={mainContentStyle}>
        <Container>
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
      <ChatAI />
    </div>
  );
}
