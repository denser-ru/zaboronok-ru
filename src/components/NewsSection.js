import React from 'react';
import NewsItem from './NewsItem';
import { Row, Col } from 'react-bootstrap';

function NewsSection() {
  // Заглушки для новостей
  const news = [
    { id: 1, title: 'Новость 1', text: 'Краткое описание новости 1', date: '2023-11-20' },
    { id: 2, title: 'Новость 2', text: 'Краткое описание новости 2', date: '2023-11-15' },
    { id: 3, title: 'Новость 3', text: 'Краткое описание новости 3', date: '2023-11-10' },
  ];

  return (
    <Row>
      <h2 className="mb-4">Новости</h2>
      {news.map((item) => (
        <Col md={4} key={item.id}>
          <NewsItem title={item.title} text={item.text} date={item.date} />
        </Col>
      ))}
    </Row>
  );
}

export default NewsSection;