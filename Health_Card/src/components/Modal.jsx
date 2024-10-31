import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  
  if (!isOpen) return null;

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <button onClick={onClose} className={classes.closeButton}>Fechar</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;