import styled from 'styled-components';

export const Message = styled.div`
  margin: auto auto auto 32px;
  text-align: left;
  font-weight: 400;
  font-size: 32px;
  letter-spacing: -0.02em;
  color: var(--main-text-color);

  @media only screen and (min-width: 375px) {
    margin-left: 64px;
  }

  @media only screen and (min-width: 768px) {
    margin: auto;
  }
`;
