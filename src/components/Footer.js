import React from 'react';
import { Container } from 'react-bootstrap';
import { FaVk, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-3 my-4">
      <Container>
        <p className="text-center text-muted">© {new Date().getFullYear()} Екатерина Заборонок</p>
        <div className="d-flex justify-content-center">
          {/* Замените # на реальные ссылки */}
          <button className="text-muted me-3" style={{border: 'none', background: 'none', padding: 0, cursor: 'pointer'}}>
            <FaVk size={24} />
          </button>
          <button className="text-muted me-3" style={{border: 'none', background: 'none', padding: 0, cursor: 'pointer'}}>
            <FaFacebook size={24} />
          </button>
          <button className="text-muted" style={{border: 'none', background: 'none', padding: 0, cursor: 'pointer'}}>
            <FaInstagram size={24} />
          </button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;