import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductList from '../../3widgets/ProductsList/ProductList';
import * as styles from './styles';

export default function ProductsPage(): React.JSX.Element {
  return (
    <Container>
      <Row className="mb-5" style={{ position: 'relative' }}>
        <Col xs={12} style={styles.bannerContainer}>
          <div style={styles.bannerOverlay} />
          <div style={styles.bannerContent}>
            <div style={styles.brandSection}>
              <h1 style={styles.mainTitle}>AMA SHOP</h1>
              <p style={styles.tagline}>Премиальные товары для тех, кто ценит качество</p>
            </div>
            <div style={styles.collectionBadge}>
              <span style={styles.badgeText}>ЭКСКЛЮЗИВНАЯ КОЛЛЕКЦИЯ</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h3 style={styles.sectionTitle}>Избранные товары</h3>
          <div style={styles.divider} />
        </Col>
      </Row>
      <ProductList />
    </Container>
  );
}
