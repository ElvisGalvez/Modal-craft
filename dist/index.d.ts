import React from 'react';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
  classNames?: {
    blocker?: string;
    content?: string;
  };
  fadeDuration?: number;
  fadeDelay?: number;
  customTransition?: string;
  customButtons?: React.ReactNode;
  style?: {
    blocker?: React.CSSProperties;
    content?: React.CSSProperties;
  };
  renderFooter?: () => React.ReactNode;
  closeOnEscape?: boolean;
  closeOnClickOutside?: boolean;
}

declare const Modal: React.FC<ModalProps>;
export default Modal;
