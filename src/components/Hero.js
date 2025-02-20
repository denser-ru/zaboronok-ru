// ./src/components/Hero.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="py-5 px-4 mb-4 bg-light rounded-3 hero">
      <div
        style={{
          // backgroundImage: 'url(https://via.placeholder.com/1200x400?text=Placeholder+Hero+Image)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      ></div>
      <h1 className="display-2 fw-bold">Екатерина Заборонок</h1>
      <hr className="my-4" />
      <Button variant="primary" size="lg" as={Link} to="biography">
        Узнать больше
      </Button>
    </div>
  );
}

export default Hero;