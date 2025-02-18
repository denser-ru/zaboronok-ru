import React from 'react';
import { Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="py-5 px-4 mb-4 bg-light rounded-3 hero">
      {/* Добавляем фоновое изображение */}
      <div
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1200x400?text=Placeholder+Hero+Image)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Чтобы изображение было под текстом
        }}
      ></div>
      <h1 className="display-2 fw-bold">Екатерина Заборонок</h1>
      <p className="lead fs-5">Музыкант, педагог, общественный деятель</p>
      <hr className="my-4" />
      <p className='fs-5'>Здесь будет краткое описание деятельности Екатерины.</p>
      <Button variant="primary" size="lg" href="/biography">
        Узнать больше
      </Button>
    </div>
  );
}

export default Hero;