import React from 'react';
import WebinarItem from './WebinarItem';
import {Row, Col} from 'react-bootstrap';

function WebinarList() {
  // Заглушки для вебинаров
  const webinars = [
    { id: 1, title: 'Вебинар 1', date: '2023-12-01', link: 'https://youtube.com/...' },
    { id: 2, title: 'Вебинар 2', date: '2023-11-15', link: 'https://youtube.com/...' },
  ];

  return (
    <Row>
        <h1>Вебинары</h1>
      {webinars.map((webinar) => (
        <Col md={4} key={webinar.id}>
            <WebinarItem title={webinar.title} date={webinar.date} link={webinar.link} />
        </Col>

      ))}
    </Row>
  );
}

export default WebinarList;