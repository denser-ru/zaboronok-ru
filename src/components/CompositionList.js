import React from 'react';
import CompositionItem from './CompositionItem';
import {Row, Col} from 'react-bootstrap'

function CompositionList() {
  // Заглушки для произведений
  const compositions = [
    { id: 1, title: 'Сочинение 1', description: 'Описание сочинения 1' },
    { id: 2, title: 'Сочинение 2', description: 'Описание сочинения 2' },
  ];

  return (
    <Row>
        <h1>Сочинения</h1>
      {compositions.map((item) => (
        <Col md={4} key={item.id}>
          <CompositionItem title={item.title} description={item.description} />
        </Col>
      ))}
    </Row>
  );
}

export default CompositionList;