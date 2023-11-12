import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Modal = ({
  isOpen = false,
  onClose,
  children,
  className = '',
  classNames = {},
  fadeDuration = 0,
  fadeDelay = 1.0,
  customTransition,
  customButtons,
  style = {},
  renderFooter,
  closeOnEscape = true,
  closeOnClickOutside = true
}) => {
  const [isShown, setIsShown] = useState(isOpen);
  const modalRef = useRef(null);

  const closeModal = (e) => {
    if (closeOnClickOutside && modalRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    setIsShown(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (closeOnEscape && event.keyCode === 27 && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, closeOnEscape]);

  const transitionStyle = customTransition || `opacity ${fadeDuration}s ease-in-out`;

  const footer = renderFooter ? renderFooter() : (customButtons || <button onClick={onClose} className="close-modal">Close</button>);

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className={`modal-blocker ${isShown ? 'shown' : 'hidden'} ${className} ${classNames.blocker || ''}`}
      style={{ ...style.blocker, transition: transitionStyle }}
      aria-hidden={!isShown}
      role="dialog"
      aria-modal="true"
      data-testid="modal-blocker" 
    >
      <div
        className={`modal-content ${classNames.content || ''}`}
        style={{ ...style.content }}
        role="document"
      >
        {children}
        {footer}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  fadeDuration: PropTypes.number,
  fadeDelay: PropTypes.number,
  customTransition: PropTypes.string,
  customButtons: PropTypes.node,
  style: PropTypes.object,
  classNames: PropTypes.object,
  renderFooter: PropTypes.func,
  closeOnEscape: PropTypes.bool,
  closeOnClickOutside: PropTypes.bool
};

export default Modal;
