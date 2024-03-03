import React from "react";
import "./Styles/Servicios.css";

const Servicios = () => {
  return (
    <section id="Servicios" className="servicios-container">
      <h2>Nuestros Servicios</h2>
      <div className="servicio-item">
        <img
          src="URL_DE_IMAGEN_SERVICIO_1"
          alt="Servicio 1"
          className="servicio-img"
        />
        <h3>Servicio Uno</h3>
        <p>
          Descripción del servicio uno. Proporcionamos [detalles del servicio uno],
          garantizando una experiencia única para nuestros visitantes.
        </p>
      </div>
      <div className="servicio-item">
        <img
          src="URL_DE_IMAGEN_SERVICIO_2"
          alt="Servicio 2"
          className="servicio-img"
        />
        <h3>Servicio Dos</h3>
        <p>
          Descripción del servicio dos. Ofrecemos [detalles del servicio dos],
          asegurando comodidad y satisfacción durante su estancia.
        </p>
      </div>
      {/* Agrega más elementos de servicio según sea necesario */}
    </section>
  );
};

export default Servicios;
