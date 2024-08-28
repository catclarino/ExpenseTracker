import styled from 'styled-components';
import { Icon } from '../../../components/Icon/Icon';

export const Backdrop = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--button-color);
  padding: 18px 20px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    width: 50vw;
    right: 0;
    left: auto;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const UserBarBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
`;

export const CloseBtnIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  fill: var(--background-color);
`;

export const NoScroll = styled.div`
  overflow: hidden;
`;
