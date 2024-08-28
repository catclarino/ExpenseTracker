import styled from 'styled-components';

export const Header = styled.header`
  margin: 0 auto;
  position: relative;
  max-width: 100%;
  background-color: var(--background-color);
  border-bottom: 1px solid rgba(250, 250, 250, 0.1);
  height: 63px;
  padding: 0 20px;
  margin-bottom: 66px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    height: 91px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 100px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const HeaderWrapperIfLogout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const HeaderIfLogout = styled.header`
  margin: 0 auto;
  position: relative;
  max-width: 375px;
  background-color: var(--background-color);
  border-bottom: none;
  height: 63px;
  padding: 0 20px;
  margin-bottom: 66px;
`;
