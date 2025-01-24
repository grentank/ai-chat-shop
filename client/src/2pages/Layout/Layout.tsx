import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Navigation from '../../3widgets/Navigation/Navigation';
import ChatAI from '../../3widgets/ChatAI/ChatAI';

export default function Layout() {
  return (
    <Container>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
      <ChatAI />
    </Container>
  );
}
