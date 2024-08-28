import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon/Icon';

export const Wrapper = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const ListItem = styled.li`
  padding-inline: 20px;
  padding-block: 22px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  // background-color: var(--box-background-color);

  @media only screen and (min-width: 768px) {
    padding-block: 32px;
    padding-inline: 23px;
    gap: 22px;
    flex-basis: calc((100% - 24px) / 2);
  }

  @media only screen and (min-width: 1440px) {
    padding-right: 104px;
  }
`;

export const IconContainer = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 36px;
  height: 36px;
  background-color: var(--button-color);
  transition: all var(--transition-delay) var(--transition);

  @media only screen and (min-width: 768px) {
    width: 43px;
    height: 43px;
  }
`;

export const StyledIcon = styled(Icon)`
  fill: var(--background-color);
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:active ${IconContainer} {
    background-color: transparent;
    border: 1px solid var(--button-color);
  }

  &:active ${StyledIcon} {
    fill: var(--black06);
  }

  @media only screen and (min-width: 1440px) {
    &:hover ${IconContainer} {
      background-color: var(--button-color);
      border: 1px solid var(--button-color);
    }

    &:hover ${StyledIcon} {
      fill: var(--black06);
    }
  }
`;
export const AmountTitle = styled.h3`
  font-size: 12px;
  color: rgba(250, 250, 250, 0.5);
  margin-bottom: 5px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const AmountDescr = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: var(--main-text-color);

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
