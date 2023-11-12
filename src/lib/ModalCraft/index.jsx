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
    if (isOpen) {
      setIsShown(true);
    } else {
      const timer = setTimeout(() => setIsShown(false), fadeDuration * 1000 * fadeDelay);
      return () => clearTimeout(timer);
    }
  }, [isOpen, fadeDuration, fadeDelay]);

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

  const transitionStyle = customTransition || `opacity ${fadeDuration}s ease ${fadeDelay}s, visibility ${fadeDuration}s ease ${fadeDelay}s`;

  const footer = renderFooter ? renderFooter() : (customButtons || <button onClick={onClose} className="close-modal">Close</button>);

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className={`modal-blocker ${isShown ? 'shown' : 'hidden'} ${className} ${classNames.blocker || ''}`}
      style={{ transition: transitionStyle, ...style.blocker }}
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
