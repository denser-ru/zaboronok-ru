import React from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap'; // Используем Carousel и Modal

function GalleryContent() {
  // Заглушки для изображений
  const images = [
    { id: 1, src: 'placeholder-image1.jpg', alt: 'Image 1' },
    { id: 2, src: 'placeholder-image2.jpg', alt: 'Image 2' },
    { id: 3, src: 'placeholder-image3.jpg', alt: 'Image 3' },
  ];

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
              style={{cursor: 'pointer'}} //Меняем курсор при наведении
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
                <img src={currentImage?.src} alt={currentImage?.alt} className="img-fluid" />
            </Modal.Body>
        </Modal>
    </div>
  );
}

export default GalleryContent;