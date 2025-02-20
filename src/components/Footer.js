// ./src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaVk, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-3 my-4">
      <Container>
        <p className="text-center text-muted">© {new Date().getFullYear()} Екатерина Заборонок</p>
        <div className="d-flex justify-content-center">
          <a href="https://vk.com/ekaterinazaboronok" target="_blank" rel="noopener noreferrer" className="text-muted me-3" style={{border: 'none', background: 'none', padding: 0, cursor: 'pointer', textDecoration: 'none'}}>
            <FaVk size={24} />
          </a>
          <a href="https://www.facebook.com/ekaterinazaboronok" target="_blank" rel="noopener noreferrer" className="text-muted me-3" style={{border: 'none', background: 'none', padding: 0, cursor: 'pointer', textDecoration: 'none'}}>
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/ekaterina_zaboronok" target="_blank" rel="noopener noreferrer" className="text-muted" style={{border: 'none', background: 'none', padding: 0, cursor: 'pointer', textDecoration: 'none'}}>
            <FaInstagram size={24} />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;