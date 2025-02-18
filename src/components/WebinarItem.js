import React from 'react';
import { Card, Button } from 'react-bootstrap';

function WebinarItem({ title, date, link }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Button variant="primary" href={link} target="_blank">Смотреть</Button>
      </Card.Body>
    </Card>
  );
}

export default WebinarItem;