import styled from 'styled-components';

export const TransactionHistoryContainer = styled.div`
  position: relative;
  min-width: 320px;
  max-width: 375px;
  padding: 0 20px 80px 20px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px 32px 32px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 100px 50px 100px;
  }
`;

export const TextContainer = styled.div`
  max-width: 100%;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    max-width: 560px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 492px;
    margin-bottom: 64px;
  }
`;

export const HistoryTitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  letter-spacing: -0.02em;
  color: var(--main-text-color);

  @media only screen and (min-width: 768px) {
    font-size: 38px;
  }
`;

export const HistoryText = styled.p`
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--regular-text-color);

  @media only screen and (min-width: 768px) {
    margin-top: 15px;
    font-size: 16px;
  }
`;

export const HistoryAmount = styled.div`
  width: 100%;
  margin: 40px 0;

  @media only screen and (min-width: 1440px) {
    margin: 0;
    position: absolute;
    width: 630px;
    fill: none;
    left: 67%;
    top: -1%;
    transform: translate(-40%, 10%);
  }
`;
