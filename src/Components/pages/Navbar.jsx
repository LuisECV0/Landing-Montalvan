import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./Styles/Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <ScrollLink
        to="Home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="title"
      >
        Logo
      </ScrollLink>
      <div className="menu" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <ScrollLink
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={handleNavLinkClick}
          >
            Quiénes somos?
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="Historia"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={handleNavLinkClick}
          >
            Historia
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="Servicios"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={handleNavLinkClick}
          >
            Servicios
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="Galeria"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={handleNavLinkClick}
          >
            Galería
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
