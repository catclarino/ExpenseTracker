import styled from 'styled-components';

export const ContainerTable = styled.div`
  overflow-x: auto;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const ListTable = styled.div`
  width: 100%;
`;

export const Thead = styled.div`
  height: 59px;
  background: rgba(0, 0, 0, 0.2);
`;

export const Tbody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 400;
  font-size: 14px;
  color: #fafafa;
  text-align: left;
  background: #171719;
  height: 313px;
  overflow: auto;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  @media only screen and (min-width: 768px) {
    height: 387px;
    font-size: 18px;
    gap: 31px;
  }

  @media only screen and (min-width: 1440px) {
    height: 287px;
    gap: 10px;
  }
`;

export const Tr = styled.div`
  width: 100%;
  display: flex;
`;

export const Th = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: rgba(250, 250, 250, 0.4);
  text-align: left;
  padding: 20px 0;
  width: ${({ width }) => width || 'auto'};

  padding-left: ${({ $pl }) => $pl || '0'};
`;

export const Td = styled.div`
  letter-spacing: 1px;
  padding-top: 20px;

  padding-left: ${({ $pl }) => $pl || '0'};
  padding-right: ${({ $pr }) => $pr || '0'};

  width: ${({ width }) => width || 'auto'};
`;

export const NoResults = styled.div`
  text-align: center;
  color: #fafafa;
  padding: 20px;
`;

export const Scrollable = styled.div`
  overflow-x: auto;

  &.scrollB {
    overflow-x: auto;
  }
`;
