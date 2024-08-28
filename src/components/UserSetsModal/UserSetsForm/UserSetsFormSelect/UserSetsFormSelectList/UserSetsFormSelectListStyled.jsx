import styled from 'styled-components';

export const Menu = styled.ul`
  box-sizing: border-box;
  position: absolute;
  width: 98px;
  border: 1px solid var(--regular-text-color01);
  border-radius: 15px;
  padding: 7px 0;
  top: 46px;
  left: 0;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 122px;
    top: 52px;
  }
`;

export const ListItem = styled.li`
  padding: 5px 14px;
  border-radius: 15px;
  color: var(--regular-text-color);
  transition: all var(--transition-delay) var(--transition);

  @media screen and (min-width: 768px) {
    padding-inline: 18px;
  }

  @media screen and (min-width: 1440px) {
    &:hover {
      background-color: var(--hover-color);
      color: var(--main-text-color);
      cursor: pointer;
    }
  }
`;

export const MenuItem = styled.p`
  font-family: 'Suisse Intl', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
