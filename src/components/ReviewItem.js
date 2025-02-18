import React from 'react';
import { Card } from 'react-bootstrap';

function ReviewItem({ author, text }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ReviewItem;