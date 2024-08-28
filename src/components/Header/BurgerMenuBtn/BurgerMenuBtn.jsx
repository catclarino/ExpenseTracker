import React from 'react';
import { BurgerMenuBtn as StyledBurgerMenuBtn } from './BurgerMenuBtnStyled';
import { Icon } from '../../../components/Icon/Icon'; 

const BurgerMenuBtn = ({ toggleMenu }) => {
  return (
    <StyledBurgerMenuBtn onClick={toggleMenu}>
      <Icon name="burger-menu" /> { }
    </StyledBurgerMenuBtn>
  );
};

export default BurgerMenuBtn;
