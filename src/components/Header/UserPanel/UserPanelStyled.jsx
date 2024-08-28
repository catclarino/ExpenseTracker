import styled from 'styled-components';
import { Icon } from '../../../components/Icon/Icon';

export const UserPanelBody = styled.div`
  flex-direction: column;
  position: absolute;
  padding: 16px;
  border: 1px solid rgba(250, 250, 250, 0.1);
  border-radius: 15px;
  width: 194px;
  background: #0c0d0d;
  display: flex;
  gap: 16px;
  justify-content: center;
  top: 50px;
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(250, 250, 250, 0.5);
  z-index: 999;

  @media screen and (min-width: 1440px) {
    width: 217px;
    top: 65px;
  }
`;

export const UserPanelItemsWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;

  &:hover {
    .userIcon,
    .logOutIcon {
      stroke: #0ef387;
    }
    .userPanelLinkText {
      color: #fafafa;
    }
  }
`;

export const UserIcon = styled(Icon)`
  fill: none;
  width: 20px;
  height: 20px;
  stroke: #838383;
  stroke-width: 1.3;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: var(--transition) var(--transition-delay);
`;

export const LogOutIcon = styled(Icon)`
  fill: none;
  width: 20px;
  height: 20px;
  stroke: #838383;
  stroke-width: 1.3;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: var(--transition) var(--transition-delay);
`;

export const UserPanelLinkText = styled.p`
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(250, 250, 250, 0.5);
  transition: var(--transition) var(--transition-delay);
`;
