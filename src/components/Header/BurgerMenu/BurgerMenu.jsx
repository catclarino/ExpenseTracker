import { useEffect } from 'react';
import UserBarBtn from '../UserBarBtn/UserBarBtn';
import TransactionsHistoryNav from '../TransactionHistoryNav/TransactionHistoryNav';
import {
  Backdrop,
  MobileMenu,
  UserBarBtnWrapper,
  CloseBtn,
  CloseBtnIcon,
  NoScroll,
} from './BurgerMenuStyled';

const BurgerMenu = ({
  toggleMenu,
  handleButtonAndToggleMenu,
  isMenuOpen,
  closeMenu,
  toggleProfileModal,
  toggleLogOutModal,
}) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(NoScroll);
    } else {
      document.body.classList.remove(NoScroll);
    }
    return () => {
      document.body.classList.remove(NoScroll);
    };
  }, [isMenuOpen]);

  const handleBackdrop = () => {
    toggleMenu();
  };

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <Backdrop onClick={handleBackdrop} />
      <MobileMenu>
        <UserBarBtnWrapper>
          <UserBarBtn
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
            toggleProfileModal={toggleProfileModal}
            toggleLogOutModal={toggleLogOutModal}
          />
          <CloseBtn onClick={toggleMenu}>
            <CloseBtnIcon name="close-btn" />
          </CloseBtn>
        </UserBarBtnWrapper>
        <TransactionsHistoryNav
          handleButtonAndToggleMenu={handleButtonAndToggleMenu}
        />
      </MobileMenu>
    </>
  );
};

export default BurgerMenu;
