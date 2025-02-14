import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import * as styles from './styles';
import { useAppDispatch, useAppSelector } from '../../6shared/lib/hooks';
import { useParams } from 'react-router';
import {
  clearComments,
  createComment,
  getCommentsByProductId,
} from '../../5entities/comment/model/commentsSlice';
import { setCommentByKey } from '../../4features/preparedPrompts';

export default function OneProductPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const { productId } = useParams();

  useEffect(() => {
    if (!productId) return;
    dispatch(getCommentsByProductId(Number(productId)));
    return () => {
      dispatch(clearComments());
    };
  }, [productId]);
  const product = useAppSelector((store) =>
    store.products.list.find((p) => p.id === Number(productId)),
  );
  const comments = useAppSelector((store) => store.comments.list);
  const [commentText, setCommentText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatchAddComment = () => {
    dispatch(createComment({ productId: Number(productId), text: commentText }));
    setCommentText('');
  };

  if (!product) return <p>загрузка...</p>;

  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        <Col md={6} style={{ textAlign: 'center' }}>
          <img src={product.image} alt={product.name} style={styles.prodImg} />
        </Col>

        <Col md={6}>
          <h1>{product.name}</h1>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ display: 'inline-block', marginRight: '10px' }}>{product.price} ₽</h3>
            <span style={styles.highPrice}>{(product.price * 3).toFixed(2)} ₽</span>
            <span style={styles.discountAmount}>-66%</span>
          </div>
          <Button variant="dark" size="lg" style={styles.buyButton}>
            Добавить в корзину
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: '30px' }}>
        <Col>
          <h4>Описание товара</h4>
          <p>{product.description}</p>
        </Col>
      </Row>

      <Row style={{ marginTop: '30px' }}>
        <Col>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatchAddComment();
            }}
          >
            <Form.Group controlId="commentText">
              <Form.Label>Добавить комментарий</Form.Label>
              <Form.Control
                onInput={() => {
                  textareaRef.current!.style.height = 'auto';
                  textareaRef.current!.style.height = `${textareaRef.current!.scrollHeight}px`;
                }}
                onKeyDown={(e) => {
                  const isMac = navigator.platform.toUpperCase().includes('MAC');
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    dispatchAddComment();
                  }
                  if ((isMac && e.ctrlKey) || (!isMac && e.altKey)) {
                    setCommentByKey(e.key, setCommentText);
                  }
                }}
                ref={textareaRef}
                as="textarea"
                rows={3}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Введите ваш комментарий..."
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Отправить
            </Button>
          </Form>
        </Col>
      </Row>

      <Row style={{ marginTop: '30px' }}>
        <Col>
          {comments.length === 0 ? (
            <p style={{ fontStyle: 'italic', color: 'gray' }}>
              Никто пока не оставил комментарий к данному товару.
            </p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} style={{ marginBottom: '20px' }}>
                <h5>{comment.User.name}</h5>
                <p>{comment.body}</p>
              </div>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
}
