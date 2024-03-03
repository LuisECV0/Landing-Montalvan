// Footer.jsx
import React from "react";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Hacienda</h4>
            <ul>
              <li><a href="#">no se</a></li>
              <li><a href="#">no se</a></li>
              <li><a href="#">no se</a></li>
              <li><a href="#">no se</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>soporte</h4>
            <ul>
              <li><a href="#">no se</a></li>
              <li><a href="#">no se</a></li>
              <li><a href="#">no se</a></li>
              <li><a href="#">no se</a></li>
              <li><a href="#">no se</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>no se </h4>
            <ul>
              <li><a href="#">no se</a></li>
              <li><a href="#">no se</a></li>
              <li><a href="#">no se</a></li>
              <li><a href="#">no se</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Redes Sociales</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
