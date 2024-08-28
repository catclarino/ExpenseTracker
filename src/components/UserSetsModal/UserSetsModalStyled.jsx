import styled  from 'styled-components';

export const Wrapper = styled.div`
  width: 295px;

  @media screen and (min-width: 768px) {
    width: 420px;
  }
`;

export const Title = styled.h1`
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
