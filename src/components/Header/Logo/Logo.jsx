import React from 'react';
import { LogoWrapper, LogoIconWrapper, LogoIcon, LogoText } from './LogoStyled';
import { Icon } from '../../../components/Icon/Icon';

const Logo = ({ resetStateActiveButton }) => {
  return (
    <LogoWrapper onClick={resetStateActiveButton} to={'/'}>
      <LogoIconWrapper>
        <LogoIcon as={Icon} /> {}
      </LogoIconWrapper>
      <LogoText>ExpenseTracker</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
