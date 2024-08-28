import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import {
  Wrapper,
  ModalContainer,
  CloseButton,
  IconStyled,
} from './ModalStyled';

const modalRoot = document.querySelector('#rootModal');

export const Modal = ({ children, pd, toggleModal, anotherModal = false }) => {
  useEffect(() => {
    if (anotherModal) return;
    const handleEscape = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal, anotherModal]);

  const handleClick = event => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      toggleModal();
    }
  };

  const modalClass = classNames({
    form: pd === 40,
    profile: pd === 60,
    logout: pd === 80,
  });

  return createPortal(
    <Wrapper onClick={handleClick}>
      <ModalContainer className={modalClass}>
        <CloseButton onClick={toggleModal}>
          <IconStyled name={'x-mark'} size={24} />
        </CloseButton>
        {children}
      </ModalContainer>
    </Wrapper>,
    modalRoot
  );
};
