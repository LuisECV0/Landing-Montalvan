import React, { useState } from 'react';
import '../pages/Styles/Galeria.css';

const MisEspacios = () => {
  const images = [
  "https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/cancha.jpeg?alt=media&token=b735b9f7-ce0e-423f-82e4-28b960f8b0c1",
  "https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/reunion.jpeg?alt=media&token=403ff7e3-c73b-4481-a891-c0c2ffd09e38",
  "https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/juegos.jpeg?alt=media&token=8c7099d6-7cee-4afd-ba5c-ff4467fc7e2b",
  "https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/interiores.jpeg?alt=media&token=9760c64e-f27a-4dde-8436-306ea9860077",
  "https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/interior2.jpeg?alt=media&token=e1950c61-d04d-4426-bf2e-75f6c7cc7030",
  "https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/celebracion3.jpeg?alt=media&token=43772862-5fe8-4fba-9120-1a9a1f94c657",
  "https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/celebracion2.jpeg?alt=media&token=30628713-e566-439a-894a-f6f788b60a7d",
  "https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/celebracion.jpeg?alt=media&token=10cb3c1a-1bf9-4196-b662-403222b43c3d"
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
      <h2>Nuestros Espacios</h2>
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
