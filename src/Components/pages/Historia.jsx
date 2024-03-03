import React from "react";
import "./Styles/Historia.css";

const Historia = () => {
  return (
    <section id="Historia" className="historia-container">
      <h2>Nuestra Historia</h2>
      <div className="historia-item">
        <img
          src="URL_DE_LA_IMAGEN_1"
          alt="Imagen de referencia 1"
          className="historia-img"
        />
        <p>
          La Hacienda Montalván tiene sus raíces en el siglo XIX, cuando fue
          fundada por [Nombre del Fundador]. Desde entonces, ha sido testigo de
          momentos históricos y ha evolucionado para convertirse en lo que es hoy.
        </p>
      </div>
      <div className="historia-item">
        <img
          src="URL_DE_LA_IMAGEN_2"
          alt="Imagen de referencia 2"
          className="historia-img"
        />
        <p>
          A lo largo de los años, hemos preservado la rica herencia agrícola
          de la hacienda, manteniendo tradiciones y proporcionando a los visitantes
          una ventana al pasado en un entorno moderno y acogedor.
        </p>
      </div>
    </section>
  );
};

export default Historia;
