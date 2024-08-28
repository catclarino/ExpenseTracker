import styled from 'styled-components';

export const Button = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  width: 44px;
  height: 44px;
  background-color: transparent;
  border: 1px solid var(--regular-text-color);

  @media only screen and (min-width: 768px) {
    display: flex;
  }

  &:hover,
  &:focus {
    border-color: var(--button-color);
    outline: none;
  }

  .btnIcon {
    width: 16px;
    height: 16px;
    color: var(--button-color);

    @media only screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;
