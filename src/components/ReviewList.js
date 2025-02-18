import React from 'react';
import ReviewItem from './ReviewItem';
import {Row, Col} from 'react-bootstrap';

function ReviewList() {
  // Заглушки для отзывов
  const reviews = [
    { id: 1, author: 'Имя 1', text: 'Текст отзыва 1' },
    { id: 2, author: 'Имя 2', text: 'Текст отзыва 2' },
  ];

  return (
    <Row>
        <h1>Отзывы</h1>
      {reviews.map((review) => (
        <Col md={4} key={review.id}>
            <ReviewItem author={review.author} text={review.text} />
        </Col>
      ))}
    </Row>
  );
}

export default ReviewList;