import React, { useState } from 'react';
import '../pages/Styles/Galeria.css';

const MisEspacios = () => {
  const images = [
    "https://picsum.photos/id/1015/1000/600",
    "https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/cat.jpg?alt=media&token=1eb20553-6b05-4742-92e3-6e390c0b19b7",
    "https://picsum.photos/id/1019/1000/600"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id='Galeria' className="mis-espacios">
      <h2>Mis Espacios</h2>
      <div className="galeria">
        <div className="imagen-container">
          <img
            src={images[currentIndex]}
            alt={`Espacio ${currentIndex + 1}`}
            className="imagen-actual"
          />
          <div className="controles">
            <div className="izquierda" onClick={prevImage}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="derecha" onClick={nextImage}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisEspacios;
