import styled from 'styled-components';
import { Icon } from '../../components/Icon/Icon';

export const MainBox = styled.div`
  width: 315px;
  height: 400px;
  border: 1px solid var(--regular-text-color01);
  border-radius: 30px;
  background-color: var(--box-background-color);
  padding: 40px 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 400px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 461px;
  }
`;

export const Box = styled.div`
  flex-grow: 1;
`;

export const MainTitle = styled.h2`
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-large);
  letter-spacing: -0.02em;
  color: var(--main-text-color);
  margin-left: var(--font-size-medium);
  margin-bottom: var(--font-size-medium);

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-left: 40px;
  }
`;

export const Title = styled.h3`
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-mini);
  color: rgba(250, 250, 250, 0.4);
  margin-left: 22px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`;

export const ListWrapper = styled.ul`
  margin-bottom: 30px;
  overflow: auto;
  max-height: 160px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    max-height: 193px;
  }
`;

export const NoObjects = styled.li`
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  line-height: 1.28571;
  color: var(--regular-text-color);
  display: flex;
  justify-content: center;
  padding: 60px 0;

  @media screen and (min-width: 768px) {
    padding: 80px 0;
  }
`;

export const NoObjectsP = styled.p`
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ListItem = styled.li`
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  color: var(--main-text-color);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 0;

  &:hover,
  &:focus {
    padding: 14px;
    background-color: var(--list-item-hover);
  }

  @media screen and (min-width: 768px) {
    padding: 10px;

    &:hover,
    &:focus {
      padding: 10px;
      background-color: var(--list-item-hover);
    }
  }
`;

export const ListSVG = styled.ul`
  display: flex;
  gap: 14px;
`;

export const ButtonSVG = styled.button`
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    background-color: var(--hover-color-gray);
  }
`;

export const IconStyled = styled(Icon)`
  fill: none;
  stroke: none;

  ${ListItem}:hover &,
  ${ListItem}:focus & {
    stroke: var(--button-color);
  }
`;

export const LabelCategory = styled.label`
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-small);
  letter-spacing: -0.02em;
  color: var(--button-color);

  @media screen and (min-width: 768px) {
    font-size: var(--font-size-smaller);
  }
`;

export const InputCategory = styled.input`
  border: 1px solid var(--border-field-color);
  border-radius: 12px;
  padding: 12px 140px 12px 14px;
  width: 275px;
  height: 42px;
  margin-top: 8px;
  background-color: var(--box-background-color);
  outline: none;
  color: var(--main-text-color);
  font-size: var(--font-size-small);

  @media screen and (min-width: 375px) {
    padding: 12px 160px 12px 14px;
    width: 295px;
    font-size: var(--font-size-smaller);
  }

  @media screen and (min-width: 768px) {
    padding: 12px 275px 12px 18px;
    width: 420px;
    height: 48px;
  }

  &:focus,
  &:hover {
    border-color: var(--button-color);
    outline-color: var(--button-color);
  }
`;

export const SubmitButton = styled.button`
  border-radius: 12px;
  padding: 14px 44px;
  width: 118px;
  height: 42px;
  background-color: var(--button-color);
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-small);
  letter-spacing: -0.02em;
  color: var(--background-color);
  position: absolute;
  top: 8px;
  right: 20px;

  &:not([disabled]):focus,
  &:not([disabled]):hover {
    background-color: var(--hover-color);
  }

  @media screen and (min-width: 768px) {
    height: 47px;
    font-size: var(--font-size-smaller);
    top: 8px;
    right: 40px;
  }
`;

export const FormStyle = styled.form`
  margin-left: 19px;

  @media screen and (min-width: 768px) {
    margin-left: 39px;
  }
`;

export const InputBox = styled.div`
  position: relative;
`;
