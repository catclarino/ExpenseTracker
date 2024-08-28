import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Input = styled.input`
  width: 189px;
  height: 42px;
  padding: 12px 14px;
  border: 1px solid var(--regular-text-color);
  border-radius: 12px;
  background: var(--box-background-color);
  font-family: 'Suisse Intl', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  color: var(--main-text-color);
  outline: none;
  transition: all var(--transition-delay) var(--transition);

  @media screen and (min-width: 1440px) {
    width: 290px;
  }

  &:hover,
  &:focus {
    border-color: var(--hover-color);
  }

  &.inputErr {
    border-color: #e74a3b;

    &:hover,
    &:focus {
      border-color: #e74a3b;
    }
  }

  @media screen and (min-width: 768px) {
    height: 48px;
    width: 290px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const InputMessage = styled.p`
  position: absolute;
  top: -15px;
  right: 95px;
  color: #e74a3b;
  font-family: 'Suisse Intl', sans-serif;
  font-weight: 400;
  font-size: 8px;
  line-height: 1.3;
  transform: translateX(50%);

  @media screen and (min-width: 768px) {
    right: 145px;
    font-size: 10px;
  }
`;

export const ButtonSubmit = styled.button`
  border-radius: 40px;
  padding: 14px 0;
  font-family: 'Suisse Intl', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--background-color);
  transition: all var(--transition-delay) var(--transition);

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      background-color: var(--hover-color);
    }
  }

  &:disabled {
    background-color: var(--text-color_50);
    cursor: default;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
