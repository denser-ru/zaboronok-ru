import React from 'react';
import SheetMusicItem from './SheetMusicItem';
import {Row, Col} from 'react-bootstrap';

function SheetMusicList() {
  // Заглушки для нот
  const sheetMusic = [
    { id: 1, title: 'Сборник 1', description: 'Описание сборника 1' },
    { id: 2, title: 'Сборник 2', description: 'Описание сборника 2' },
  ];

  return (
    <Row>
        <h1>Ноты</h1>
      {sheetMusic.map((item) => (
        <Col md={4} key={item.id}>
            <SheetMusicItem title={item.title} description={item.description} />
        </Col>
      ))}
    </Row>
  );
}

export default SheetMusicList;