import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 0 20px;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    padding: 0 100px 100px;
  }
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerText = styled.div`
  width: 335px;

  @media only screen and (min-width: 768px) {
    width: 704px;
  }

  @media (max-width: 374.99px) {
    width: 270px;
  }

  @media only screen and (min-width: 1440px) {
    width: 575px;
  }
`;

export const ContainerImg = styled.div`
  display: none;

  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 32px;
  }
`;

export const Img = styled.img`
  width: 125px;
  height: 48px;
`;

export const TitleUsers = styled.h2`
  font-size: var(--font-size-modal-title);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--main-text-color);
  margin-bottom: 12px;
  justify-content: center;
`;

export const Tx = styled.p`
  width: 210px;
  font-weight: 400;
  font-size: var(--font-size-smaller);
  letter-spacing: -0.02em;
  color: var(--regular-text-color);
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: var(--font-size-small);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--regular-text-color);
  margin-bottom: 10px;

  @media only screen and (min-width: 768px) {
    font-size: var(--font-size-small);
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: var(--font-size-title-mob);
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: var(--main-text-color);

  @media only screen and (min-width: 768px) {
    font-size: var(--font-size-main-title);
    margin-bottom: 20px;
  }
`;

export const Span = styled.span`
  text-decoration: underline;
  color: var(--button-color);
`;

export const TextDesc = styled.p`
  font-weight: 400;
  font-size: var(--font-size-small);
  letter-spacing: -0.02em;
  color: var(--regular-text-color);
  margin-bottom: 30px;
  width: 335px;

  @media only screen and (min-width: 768px) {
    font-size: var(--font-size-smaller);
    margin-bottom: 40px;
    width: 533px;
  }

  @media (max-width: 374.99px) {
    width: 270px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 36px;
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: 166px;
  }
`;

export const ButtonUp = styled(NavLink)`
  background-color: var(--button-color);
  border-radius: 40px;
  padding: 14px 44px;
  width: 138px;
  height: 44px;
  font-weight: 400;
  font-size: var(--font-size-small);
  text-align: center;
  letter-spacing: -0.02em;
  color: var(--main-text-color);
  transition: background-color var(--transition-delay) var(--transition);

  &:hover {
    background-color: var(--hover-color);
  }

  @media only screen and (min-width: 768px) {
    width: 145px;
    height: 47px;
    font-size: var(--font-size-smaller);
  }

  @media (max-width: 374.99px) {
    padding: 14px 35px;
  }
`;

export const ButtonIn = styled(NavLink)`
  background-color: transparent;
  border: 1px solid var(--regular-text-color);
  border-radius: 40px;
  padding: 14px 40px;
  width: 131px;
  height: 44px;
  font-weight: 400;
  font-size: var(--font-size-small);
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--main-text-color);
  transition: border var(--transition) var(--transition-delay);

  &:hover {
    border: 1px solid var(--button-color);
  }

  @media only screen and (min-width: 768px) {
    width: 137px;
    height: 47px;
    font-size: var(--font-size-smaller);
  }

  @media (max-width: 374.99px) {
    padding: 14px 35px;
  }
`;
