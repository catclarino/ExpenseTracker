import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 66px;

  @media only screen and (min-width: 1440px) {
    flex-wrap: wrap;
    gap: 40px 44px;
    max-height: 600px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  letter-spacing: -0.02em;
  color: var(--main-text-color);
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    font-size: 38px;
    margin-bottom: 15px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--regular-text-color);

  @media only screen and (min-width: 768px) {
    width: 500px;
    font-size: 16px;
  }

  @media only screen and (min-width: 1440px) {
    width: 625px;
  }
`;

export const TitleWrapper = styled.div`
  @media only screen and (min-width: 1440px) {
    order: 2;
  }
`;

export const Total = styled.div`
  @media only screen and (min-width: 1440px) {
    height: 121px;
    order: 2;
  }
`;

export const FormWrapper = styled.div`
  @media only screen and (min-width: 1440px) {
    order: 4;
  }
`;

export const ChartWrapper = styled.div`
  @media only screen and (min-width: 1440px) {
    order: 3;
    width: 630px;
  }
`;
