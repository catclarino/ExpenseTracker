import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import UserPanel from '../UserPanel/UserPanel';
import { selectUser } from '../../../redux/User/userSlice';
import { getSevenLetters } from '../../../helpers';
import {
  UserBarBtnWrapper,
  UserBarBtnTop,
  UserLogoWrapper,
  AvatarPlaceholder,
  UserLogo,
  UserName,
  Chevron,
} from './UserBarBtnStyled';

const UserBarBtn = ({
  toggleProfileModal,
  toggleLogOutModal,
  closeMenu,
  isMenuOpen,
}) => {
  const { name, avatarUrl } = useSelector(selectUser);

  const [isOpen, setIsOpen] = useState(false);
  const userBtnRef = useRef(null);

  const toggleUserBarBtn = () => setIsOpen(prevState => !prevState);

  const closeUserBar = () => setIsOpen(false);

  return (
    <UserBarBtnWrapper ref={userBtnRef}>
      <UserBarBtnTop onClick={toggleUserBarBtn}>
        <UserLogoWrapper>
          {avatarUrl ? (
            <UserLogo src={avatarUrl} alt={`${name} avatar`} />
          ) : (
            <AvatarPlaceholder>
              {name.charAt(0).toUpperCase()}
            </AvatarPlaceholder>
          )}
        </UserLogoWrapper>

        <UserName>{name ? getSevenLetters(name) : 'Your Name'}</UserName>
        <Chevron name={isOpen ? 'chevron-up' : 'chevron-down'} />
      </UserBarBtnTop>
      {isOpen && (
        <UserPanel
          toggleUserBarBtn={toggleUserBarBtn}
          userBtnRef={userBtnRef}
          closeUserBar={closeUserBar}
          closeMenu={closeMenu}
          isMenuOpen={isMenuOpen}
          toggleProfileModal={toggleProfileModal}
          toggleLogOutModal={toggleLogOutModal}
        />
      )}
    </UserBarBtnWrapper>
  );
};

export default UserBarBtn;
