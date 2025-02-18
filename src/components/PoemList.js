import React from 'react';
import PoemItem from './PoemItem'
import {Row, Col} from 'react-bootstrap'

function PoemList() {
  // Заглушки для стихов
  const poems = [
    { id: 1, title: 'Стих 1', text: 'Текст стиха 1...' },
    { id: 2, title: 'Стих 2', text: 'Текст стиха 2...' },
  ];

  return (
    <Row>
        <h1>Стихи</h1>
      {poems.map((poem) => (
         <Col md={4} key={poem.id}>
            <PoemItem title={poem.title} text={poem.text} />
         </Col>
      ))}
    </Row>
  );
}

export default PoemList;