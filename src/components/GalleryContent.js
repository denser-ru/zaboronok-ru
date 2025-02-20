import React from 'react';
import { Carousel, Modal } from 'react-bootstrap'; // Используем Carousel и Modal

function GalleryContent() {
  // Функция для импорта всех изображений из папки gallery
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const imageFiles = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/)); // Импорт всех png, jpg, jpeg из папки gallery
  const images = Object.keys(imageFiles).map((filename, index) => ({
    id: index + 1,
    src: imageFiles[filename], // Используем импортированный путь к изображению
    alt: `Фотография ${index + 1}`, // Или можно использовать filename для alt-текста
  }));

  const [showModal, setShowModal] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentImage(null);
  };

  return (
    <div>
      <h1>Галерея</h1>
      <Carousel>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(image)} // Добавляем обработчик клика
              style={{
                cursor: 'pointer',
                maxHeight: '500px',
                width: 'auto',
                objectFit: 'contain' // <---- Добавили object-fit: contain
              }}
            />
            <Carousel.Caption>
              <h3>{image.alt}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* Модальное окно */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{currentImage?.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={currentImage?.src}
            alt={currentImage?.alt}
            className="img-fluid"
            style={{
              maxWidth: '90%',
              objectFit: 'contain' // <---- Добавили object-fit: contain и сюда
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default GalleryContent;