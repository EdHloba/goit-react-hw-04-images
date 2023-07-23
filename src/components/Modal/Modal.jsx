import PropTypes from 'prop-types';
import css from './Modal.module.css';

import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ largeImageURL, tags, onClose }) {
  useEffect(() => {
    const handleOnClose = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleOnClose);
    return () => {
      window.removeEventListener('keydown', handleOnClose);
    };
  }, [onClose]);

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div className={css.overlay} onClick={handleClickBackdrop}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
