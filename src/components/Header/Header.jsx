import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from './Logo/Logo';
import BurgerMenuBtn from './BurgerMenuBtn/BurgerMenuBtn';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { selectIsLoggedIn } from '../../redux/Auth/authSlice';
import TransactionsHistoryNav from './TransactionHistoryNav/TransactionHistoryNav';
import UserBarBtn from './UserBarBtn/UserBarBtn';
import { useModal } from '../../hooks/useModal';
import { LogOut, Modal, UserSetsModal } from 'components';
import {
  Header,
  HeaderWrapper,
  HeaderWrapperIfLogout,
  HeaderIfLogout,
} from './HeaderStyled';

const HeaderComponent = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [isOpenProfileModal, toggleProfileModal] = useModal();
  const [isOpenLogOutModal, toggleLogOutModal] = useModal();

  useEffect(() => {
    const handleResize = () => {
      setShowComponent(window.innerWidth >= 1440);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleButtonAndToggleMenu = buttonName => {
    setActiveButton(buttonName);
  };

  const resetStateActiveButton = () => {
    setActiveButton(null);
  };

  return (
    <>
      {isLoggedIn ? (
        <Header>
          <HeaderWrapper>
            <Logo resetStateActiveButton={resetStateActiveButton} />
            <BurgerMenuBtn toggleMenu={toggleMenu} />
            {isMenuOpen && (
              <BurgerMenu
                handleButtonAndToggleMenu={handleButtonAndToggleMenu}
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                closeMenu={closeMenu}
                toggleProfileModal={toggleProfileModal}
                toggleLogOutModal={toggleLogOutModal}
              />
            )}
            {isLoggedIn && showComponent && (
              <TransactionsHistoryNav
                activeButton={activeButton}
                handleButtonAndToggleMenu={handleButtonAndToggleMenu}
                toggleMenu={toggleMenu}
              />
            )}
            {isLoggedIn && showComponent && (
              <UserBarBtn
                toggleProfileModal={toggleProfileModal}
                toggleLogOutModal={toggleLogOutModal}
              />
            )}
          </HeaderWrapper>
          {isOpenProfileModal && (
            <Modal pd={60} toggleModal={toggleProfileModal}>
              <UserSetsModal toggleModal={toggleProfileModal} />
            </Modal>
          )}
          {isOpenLogOutModal && (
            <Modal pd={80} toggleModal={toggleLogOutModal}>
              <LogOut toggleLogOutModal={toggleLogOutModal} />
            </Modal>
          )}
        </Header>
      ) : (
        <HeaderIfLogout>
          <HeaderWrapperIfLogout>
            <Logo resetStateActiveButton={resetStateActiveButton} />
          </HeaderWrapperIfLogout>
        </HeaderIfLogout>
      )}
    </>
  );
};

export default HeaderComponent;
