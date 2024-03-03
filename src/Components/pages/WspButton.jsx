// WspButton.jsx
import React from 'react';
import './Styles/WspButton.css';

const WspButton = () => {
  const phoneNumber = '935169379';
  const message = 'Hola';

  const handleWhatsAppClick = () => {
    const mobile = '+' + phoneNumber;
    if (mobile) {
      if (message) {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      } else {
        alert('Please insert a message to send');
      }
    } else {
      alert('Please insert a phone number');
    }
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/whatsapp_logo_icon_170905.png" alt="WhatsApp Icon" />
    </div>
  );
};

export default WspButton;
