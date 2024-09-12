import React from 'react';
import './Modal.css'; // Stile per la modale

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
