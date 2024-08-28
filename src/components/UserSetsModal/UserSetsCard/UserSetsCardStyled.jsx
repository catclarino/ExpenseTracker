import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 220px;
  padding: 40px 0;
  margin: 0 auto;
`;

export const PhotoWrapper = styled.div`
  position: relative;

  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--black05);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Text = styled.p`
  font-size: 40px;
  color: var(--button-color);
  transform: translateY(4px);

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  background: var(--button-color-modal);
  border-radius: 40px;
  padding: 8px 16px;
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: var(--main-text-color);
  transition: all var(--transition-delay) var(--transition);

  &:hover,
  &:focus {
    color: var(--text-color_50);
  }

  &:disabled {
    background-color: var(--text-color_50);
    color: var(--main-text-color);
    cursor: default;
  }

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      color: var(--text-color_50);
    }
  }
`;

export const Input = styled.input`
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
