import styled from 'styled-components';
import { Icon } from '../../Icon/Icon';

export const UserBarBtnWrapper = styled.div`
  position: relative;
`;

export const UserBarBtnTop = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  padding: 6px 16px;
  width: 194px;
  height: 46px;
  background: #171719;

  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: rgba(250, 250, 250, 0.4);

  @media screen and (min-width: 1440px) {
    width: 217px;
    height: 56px;
    margin-bottom: 0;
  }
`;

export const UserLogoWrapper = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
  }
`;

export const AvatarPlaceholder = styled.span`
  font-size: 25px;
`;

export const UserLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserName = styled.p`
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: rgba(250, 250, 250, 0.4);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const Chevron = styled(Icon)`
  fill: none;
  stroke: var(--button-color);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: 20px;
  height: 20px;
`;
