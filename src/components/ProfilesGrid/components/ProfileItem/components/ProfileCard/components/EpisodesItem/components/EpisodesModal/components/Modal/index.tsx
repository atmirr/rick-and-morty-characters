import React, { useEffect, useState, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { createPortal } from 'react-dom';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em 1em;
  z-index: 999999;
  box-sizing: border-box;
  cursor: pointer;
  ${({ fade }: { fade: boolean }) =>
    fade &&
    css`
      animation: ${fadeIn} 0.3s 1 linear;
      animation-fill-mode: forwards;
      opacity: 0;
    `}
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

type PropTypes = {
  children: React.ReactNode;
  fade: boolean;
  defaultOpened: boolean;
  handleCloseModal: () => void;
};

export function Modal({
  children,
  fade = false,
  defaultOpened = false,
  handleCloseModal,
}: PropTypes): React.ReactElement {
  const documentBody = document.getElementsByTagName('body')[0];
  const [isOpen, setIsOpen] = useState(defaultOpened);
  const close = useCallback(() => {
    // Making the vertical scrollbar's overflow back to normal when the component is unmounted
    documentBody.style.overflowY = 'auto';
    setIsOpen(false);
    handleCloseModal && handleCloseModal();
  }, []);

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) {
      // Making the vertical scrollbar lock when the backdrop is mounted
      documentBody.style.overflowY = 'hidden';
      // Add event listener for the Esc key
      document.addEventListener('keydown', handleEscape, false);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <Container data-testid="modal" fade={fade}>
        <Overlay onClick={close} />
        {children}
      </Container>
    ) : null,
    documentBody,
  );
}

export default Modal;
