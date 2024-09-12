// src/components/Modal/Modal.js
import React from 'react';
import './Modal.css'; // Assicurati di aggiungere stili per la modale

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button onClick={onClose}>Chiudi</button>
      </div>
    </div>
  );
};

export default Modal;
