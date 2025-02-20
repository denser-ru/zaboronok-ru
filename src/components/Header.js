import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

function Header() {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          <Image
            src={logo}
            alt="Логотип Екатерина Заборонок"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/biography" className="nav-link-custom">
              Биография
            </Nav.Link>
            <Nav.Link as={Link} to="/activities" className="nav-link-custom">
              Деятельность
            </Nav.Link>
            <Nav.Link as={Link} to="/webinars" className="nav-link-custom">
              Вебинары
            </Nav.Link>
            <Nav.Link as={Link} to="/sheetmusic" className="nav-link-custom">
              Ноты
            </Nav.Link>
            <Nav.Link as={Link} to="/compositions" className="nav-link-custom">
              Сочинения
            </Nav.Link>
            <Nav.Link as={Link} to="/poems" className="nav-link-custom">
              Стихи
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="nav-link-custom">
              Галерея
            </Nav.Link>
            <Nav.Link as={Link} to="/reviews" className="nav-link-custom">
              Отзывы
            </Nav.Link>
            <Nav.Link as={Link} to="/contacts" className="nav-link-custom">
              Контакты
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;