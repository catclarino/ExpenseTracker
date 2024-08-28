import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: var(--box-background-color);
  padding: 12px 14px;
  width: 98px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--regular-text-color);
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 48px;
    width: 122px;
    gap: 18px;
    padding-inline: 18px;
    transition: all var(--transition-delay) var(--transition);
  }

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      cursor: pointer;
      border-color: var(--hover-color);
    }
  }
`;

export const Text = styled.p`
  font-family: 'Suisse Intl', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  color: var(--main-text-color);
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    fill: black;
    stroke: white;
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
