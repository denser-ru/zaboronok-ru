import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

function Contacts() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <ContactForm />
        </Col>
        <Col md={6}>
          <ContactInfo />
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;