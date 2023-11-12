import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../lib/ModalCraft';

describe('Modal', () => {
  it('should display the modal when isOpen is true', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByRole('dialog')).toHaveClass('shown');
  });

  it('should not display the modal when isOpen is false', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={false} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should call onClose when the escape key is pressed', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape', keyCode: 27, charCode: 27 });
    expect(handleClose).toHaveBeenCalled();
  });

  it('should not call onClose when clicking inside the modal content', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.mouseDown(screen.getByRole('document'));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('should remain visible during the fade out animation', () => {
    jest.useFakeTimers();
    const handleClose = jest.fn();
    render(
      <Modal isOpen={false} onClose={handleClose} fadeDuration={1} fadeDelay={0.5}>
        <div>Modal Content</div>
      </Modal>
    );

    jest.advanceTimersByTime(500); 
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    jest.advanceTimersByTime(500); 
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('should display custom buttons when provided', () => {
    const handleClose = jest.fn();
    const customButtons = <button className="custom-close" onClick={handleClose}>Close Now</button>;
    render(
      <Modal isOpen={true} onClose={handleClose} customButtons={customButtons}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByText('Close Now')).toBeInTheDocument();
  });

  it('should call onClose when the modal blocker is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} closeOnClickOutside={true}>
        <div>Modal Content</div>
      </Modal>
    );
  
    fireEvent.click(screen.getByTestId('modal-blocker'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('should close the modal when clicking outside the modal content', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} closeOnClickOutside={true}>
        <div>Modal Content</div>
      </Modal>
    );
  
fireEvent.click(screen.getByTestId('modal-blocker'));
    expect(handleClose).toHaveBeenCalled();
  });
  

  it('should show the modal when isOpen changes from false to true', () => {
    const handleClose = jest.fn();
    const { rerender } = render(
      <Modal isOpen={false} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    rerender(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should not close the modal on escape key press when closeOnEscape is false', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} closeOnEscape={false}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape', keyCode: 27, charCode: 27 });
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('should apply custom transition style', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} customTransition="opacity 2s ease">
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByRole('dialog')).toHaveStyle('transition: opacity 2s ease');
  });
  
  
});