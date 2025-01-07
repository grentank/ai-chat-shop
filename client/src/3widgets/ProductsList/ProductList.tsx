import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../../4features/ProductCard/ProductCard';
import MOCK_PRODUCTS from '../../5entities/products/model/products';

export default function ProductList(): React.JSX.Element {
  return (
    <Row>
      {MOCK_PRODUCTS.map((product) => (
        <Col xs={12} sm={6} md={3} key={product.id} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}
