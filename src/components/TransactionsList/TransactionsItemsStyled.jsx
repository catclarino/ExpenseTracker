import styled from 'styled-components';
import { Icon } from '../Icon/Icon';

export const Tr = styled.ul`
  width: 100%;
  display: inline-flex;
  padding: 0;
  margin: 0;
`;

export const Td = styled.li`
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  width: ${({ width }) => width || 'auto'};
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const BtnTable = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  padding: 14px 20px;
  font-weight: 400;
  font-size: 16px;
  color: var(--background-color);
  background-color: var(--button-color);
  transition: all var(--transition-delay) var(--transition);
  outline: none;
  gap: 8px;

  &:hover,
  &:focus {
    background-color: var(--hover-color);
  }
`;

export const BtnTableDel = styled(BtnTable)`
  background: var(--background-color);
  color: var(--main-text-color);
  border: 1px solid var(--background-color);

  &:hover,
  &:focus {
    border: 1px solid var(--hover-color);
    background-color: var(--hover-color);
    color: var(--hover-text-color);
  }
`;

export const IconEdit = styled(Icon)`
  stroke: var(--background-color);
  fill: none;
`;

export const IconDelete = styled(Icon)`
  stroke: var(--main-text-color);
  fill: none;
`;

export const TextEdit = styled.span`
  font-size: 16px;
  color: var(--background-color);
`;

export const TextCont = styled.span`
  font-size: 16px;
  color: var(--main-text-color);
`;
