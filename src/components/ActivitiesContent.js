import React from 'react';
import { Row, Col, Accordion } from 'react-bootstrap'; // Используем Accordion

function ActivitiesContent() {
  return (
    <Row>
      <Col>
        <h1>Деятельность</h1>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Музыкальная школа Екатерины Заборонок</Accordion.Header>
            <Accordion.Body>
              <p>Описание музыкальной школы.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Федерация хорового и вокального искусства (ФХВИ)</Accordion.Header>
            <Accordion.Body>
              <p>Описание ФХВИ.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Репетиционная база "Территория музыки"</Accordion.Header>
            <Accordion.Body>
               <p>Описание репетиционной базы.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Другие проекты</Accordion.Header>
            <Accordion.Body>
               <p>Информация о других проектах.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  );
}

export default ActivitiesContent;