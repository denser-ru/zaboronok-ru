import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  return (
    <Form>
        <h1>Контакты</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Имя</Form.Label>
        <Form.Control type="text" placeholder="Введите ваше имя" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Введите ваш email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Сообщение</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Введите сообщение" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
  );
}

export default ContactForm;