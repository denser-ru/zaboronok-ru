import React from 'react';
import { Card } from 'react-bootstrap';

function CompositionItem({title, description}) {
  return (
    <Card className="mb-4">
      {/* Здесь можно добавить аудиоплеер */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CompositionItem;