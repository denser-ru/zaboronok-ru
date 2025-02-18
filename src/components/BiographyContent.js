import React from 'react';
import { Row, Col } from 'react-bootstrap';

function BiographyContent() {
  return (
    <Row>
      <Col>
        <h1>Биография</h1>
        <p>Здесь будет подробная биография Екатерины Заборонок (текст, фотографии).</p>
        <h2>Образование</h2>
        <ul>
          <li>Музыкальное училище им. Гнесиных (2001-2005)</li>
          <li>МГК им. Чайковского</li>
          <li>...</li>
        </ul>
        <h2>Прошлые места работы</h2>
        <ul>
          <li>...</li>
        </ul>
      </Col>
    </Row>
  );
}

export default BiographyContent;