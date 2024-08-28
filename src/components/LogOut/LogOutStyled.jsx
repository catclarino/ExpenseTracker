import styled from 'styled-components';

export const Title = styled.p`
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--main-text-color);
  margin-bottom: 40px;
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--background-color);
  border-radius: 40px;
  padding: 14px 44px;
  transition: all var(--transition-delay) var(--transition);

  &:disabled {
    background-color: var(--text-color_50);
    cursor: default;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    background: #0ebb69;
  }
`;

export const ButtonCancel = styled(Button)`
  background: var(--button-color-modal);
  color: var(--main-text-color);

  &:hover,
  &:focus {
    color: var(--text-color_50);
  }
`;
