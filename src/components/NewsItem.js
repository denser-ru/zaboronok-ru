// ./src/components/NewsItem.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function NewsItem({ title, text, date, link, image }) {
  const truncateText = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };

  const truncatedText = truncateText(text, 650); 
  return (
    <Card className="mb-4 news-item">
      <Card.Body>
        {image && (
          <Card.Img variant="top" src={image} className="mb-3" />
        )}
        <Card.Title className="fs-5">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{truncatedText}</Card.Text> 
        <Button variant="outline-primary" href={link} target="_blank" rel="noopener noreferrer">Подробнее</Button>
      </Card.Body>
    </Card>
  );
}

export default NewsItem;