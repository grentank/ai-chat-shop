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

  if (!product)
    return <p style={{ textAlign: 'center', color: '#b3b3b3', marginTop: '3rem' }}>загрузка...</p>;

  return (
    <Container style={{ marginTop: '40px', marginBottom: '60px' }}>
      <Row>
        <Col md={6} style={styles.imageCol}>
          <div style={styles.imageContainer}>
            <img src={product.image} alt={product.name} style={styles.prodImg} />
          </div>
        </Col>

        <Col md={6} style={styles.detailsCol}>
          <h1 style={styles.productTitle}>{product.name}</h1>

          <div style={styles.priceSection}>
            <div style={styles.priceMain}>
              <span style={styles.currentPrice}>{product.price.toLocaleString()} ₽</span>
              <span style={styles.discountAmount}>-66%</span>
            </div>
            <span style={styles.highPrice}>
              {(product.price * 3).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽
            </span>
          </div>

          <Button variant="dark" size="lg" style={styles.buyButton}>
            Добавить в корзину
          </Button>

          <div style={styles.descriptionSection}>
            <h4 style={styles.sectionTitle}>Описание товара</h4>
            <div style={styles.divider} />
            <p style={styles.description}>{product.description}</p>
          </div>
        </Col>
      </Row>

      <Row style={styles.commentsSection}>
        <Col>
          <h4 style={styles.sectionTitle}>Отзывы</h4>
          <div style={styles.divider} />

          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatchAddComment();
            }}
            style={styles.commentForm}
          >
            <Form.Group controlId="commentText">
              <Form.Label style={styles.formLabel}>Ваш отзыв</Form.Label>
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
                placeholder="Поделитесь своим мнением о товаре..."
                style={styles.textarea}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3" style={styles.submitButton}>
              Отправить отзыв
            </Button>
          </Form>
        </Col>
      </Row>

      <Row style={{ marginTop: '40px' }}>
        <Col>
          {comments.length === 0 ? (
            <p style={styles.noComments}>
              Пока никто не оставил отзыв о данном товаре. Будьте первым!
            </p>
          ) : (
            <div style={styles.commentsList}>
              {comments.map((comment) => (
                <div key={comment.id} style={styles.commentCard}>
                  <div style={styles.commentHeader}>
                    <h5 style={styles.commentAuthor}>{comment.User.name}</h5>
                  </div>
                  <p style={styles.commentBody}>{comment.body}</p>
                </div>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
