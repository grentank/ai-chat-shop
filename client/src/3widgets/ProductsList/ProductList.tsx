import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../../4features/ProductCard/ProductCard';
import { useAppSelector } from '../../6shared/lib/hooks';

export default function ProductList(): React.JSX.Element {
  const products = useAppSelector((store) => store.products.list);
  return (
    <Row>
      {products.map((product) => (
        <Col xs={12} sm={6} md={3} key={product.id} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}
