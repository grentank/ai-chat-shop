import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ProductList from '../../3widgets/ProductsList/ProductList';
import * as styles from './styles';

export default function ProductsPage(): React.JSX.Element {
  return (
    <Container>
      <Row className="mb-4" style={{ position: 'relative' }}>
        <Col xs={12} style={styles.bannerContainer}>
          <Image style={styles.banner} src="/img/elbrus3.jpg" />
          <div style={styles.textContainer}>
            <h1 style={styles.title}>Эльбрус-шоп</h1>
            <h2 style={styles.titleDiscount}>Скидки до -80%!</h2>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Горячие предложения</h3>
        </Col>
      </Row>

      <ProductList />
    </Container>
  );
}
