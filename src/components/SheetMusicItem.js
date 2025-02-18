import React from 'react';
import { Card, Button } from 'react-bootstrap';

function SheetMusicItem({ title, description }) {
  return (
    <Card className="mb-4">
      {/* Здесь можно добавить изображение обложки */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Скачать</Button>
      </Card.Body>
    </Card>
  );
}

export default SheetMusicItem;