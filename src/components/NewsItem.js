import React from 'react';
import { Card, Button } from 'react-bootstrap';

function NewsItem({ title, text, date }) {
  return (
    <Card className="mb-4 news-item">
      <Card.Body>
        <Card.Title className="fs-5">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <Button variant="outline-primary">Подробнее</Button>
      </Card.Body>
    </Card>
  );
}

export default NewsItem;