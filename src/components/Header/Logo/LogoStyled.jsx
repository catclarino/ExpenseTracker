import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoWrapper = styled(NavLink)`
  display: flex;
  gap: 8px;
  height: 17px;
  align-items: center;
`;

export const LogoIconWrapper = styled.div`
  width: 27px;
  height: 17px;
`;

export const LogoIcon = styled.div`
  width: 100%;
  height: 100%;
`;

export const LogoText = styled.p`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #fafafa;
  font-family: 'SuisseIntl-Bold', sans-serif;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
