import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 150px;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding: 0;
  }
`;

export const Button = styled.button`
  border-radius: 30px;
  padding: 12px 21px;
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  letter-spacing: -0.02em;
  border: 1px solid rgba(12, 13, 13, 0.4);
  transition: var(--transition) var(--transition-delay);
  font-size: 13px;

  @media screen and (min-width: 768px) {
    width: 125px;
    height: 43px;
    font-size: 15px;
  }
`;

export const MobileNavBtn = styled(Button)`
  width: 150px;
  height: 40px;
  background-color: transparent;

  &:hover {
    background-color: var(--box-background-color);
    border: 1px solid var(--border-color);
    color: #fafafa;
  }

  @media screen and (min-width: 1440px) {
    background-color: transparent;
    color: #fafafa;
    border: 1px solid rgba(250, 250, 250, 0.4);
    &:hover {
      color: #fafafa;
      border: 1px solid var(--button-color);
    }
  }
`;

export const NavBtnActive = styled(Button)`
  width: 115px;
  height: 40px;
  background-color: black;
  border: 1px solid var(--button-color);
  color: #fafafa;

  @media screen and (min-width: 1440px) {
    background-color: var(--button-color);
    border: 1px solid var(--button-color);
    color: var(--background-color);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
