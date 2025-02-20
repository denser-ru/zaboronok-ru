// ./src/components/HomePageAbout.js
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import profImg from '../assets/images/profile1.jpg';

function HomePageAbout() {
  return (
    <Row className="mb-4">
      <Col md={4} className="d-flex justify-content-center align-items-center">
        <Image
          src={profImg}
          roundedCircle
          fluid
          style={{maxWidth: '250px', maxHeight: '250px'}} // Ограничил размеры фото
          alt="Екатерина Заборонок"
        />
      </Col>
      <Col md={8}>
        <p className="lead" style={{fontSize: '1.2rem'}}>Музыкант, педагог, общественный деятель.</p>
        <p>
          Екатерина Заборонок – музыкант, дирижер хора, педагог, общественный и культурный деятель. Президент "Федерации хорового и вокального искусства", директор "Музыкальной школы для взрослых" и репетиционной базы "Территория музыки".
        </p>
      </Col>
    </Row>
  );
}

export default HomePageAbout;