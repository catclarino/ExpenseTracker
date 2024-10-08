import styled from 'styled-components';
import { Icon } from '../Icon/Icon';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: var(--black06);
`;

export const ModalContainer = styled.div`
  position: relative;
  border: 1px solid var(--regular-text-color01);
  border-radius: 30px;
  background-color: #171719;

  &.form {
    padding: 40px 20px;
  }

  &.profile {
    padding: 40px 20px 60px;
  }

  &.logout {
    padding: 80px 29px;
  }

  @media screen and (max-width: 374.99px) {
    &.profile {
      padding: 40px clamp(0px, 6vw, 20px) 60px;
    }
    &.form {
      padding: 40px 20px;
    }
    &.logout {
      padding: 80px 29px;
    }
  }

  @media screen and (min-width: 768px) {
    &.profile {
      padding-left: 40px;
      padding-right: 40px;
    }
    &.form {
      padding-left: 40px;
      padding-right: 40px;
    }
    &.logout {
      padding-left: 105px;
      padding-right: 105px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 19px;
  right: 18px;
  width: 24px;
  height: 24px;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconStyled = styled(Icon)`
  stroke: var(--main-text-color);
`;
