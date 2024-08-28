import React, { useEffect } from 'react';
import {
  UserPanelBody,
  UserPanelItemsWrapper,
  UserIcon,
  LogOutIcon,
  UserPanelLinkText,
} from './UserPanelStyled';

const UserPanel = ({
  closeUserBar,
  toggleUserBarBtn,
  userBtnRef,
  closeMenu,
  isMenuOpen,
  toggleProfileModal,
  toggleLogOutModal,
}) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (userBtnRef.current && !userBtnRef.current.contains(event.target)) {
        toggleUserBarBtn();
      }
    };

    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        closeUserBar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [closeUserBar, toggleUserBarBtn, userBtnRef]);

  const handleProfileClick = () => {
    toggleProfileModal();
    closeUserBar();
    if (isMenuOpen) {
      closeMenu();
    }
  };

  const handleLogOutClick = () => {
    toggleLogOutModal();
    closeUserBar();
    if (isMenuOpen) {
      closeMenu();
    }
  };

  return (
    <UserPanelBody>
      <UserPanelItemsWrapper onClick={handleProfileClick}>
        <UserIcon name="user" className="userIcon" />
        <UserPanelLinkText>Profile settings</UserPanelLinkText>
      </UserPanelItemsWrapper>
      <UserPanelItemsWrapper onClick={handleLogOutClick}>
        <LogOutIcon name="log-out" className="logOutIcon" />
        <UserPanelLinkText>Log out</UserPanelLinkText>
      </UserPanelItemsWrapper>
    </UserPanelBody>
  );
};

export default UserPanel;
