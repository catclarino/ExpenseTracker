import styled from 'styled-components';

export const WarningWrapper = styled.div`
  position: relative;
  background-color: var(--box-background-color);
  padding-top: 30px;
  padding-bottom: 150px;
  padding-inline: 40px;
  border-radius: 30px;

  @media only screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 245px;
    padding-inline: 40px;
  }
`;

export const WarningTitle = styled.h2`
  text-align: center;
  margin-inline: auto;
  font-size: 20px;
  color: var(--text-color_50);

  @media only screen and (min-width: 768px) {
    width: 538px;
    font-size: 24px;
  }
`;

export const ImgNoData = styled.img`
  position: absolute;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
  width: 250px;

  @media only screen and (min-width: 768px) {
    width: 440px;
  }
`;

export const ImgNoTransactions = styled.img`
  position: absolute;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
  width: 250px;
  border-radius: 20px;

  @media only screen and (min-width: 768px) {
    bottom: 25px;
    width: 400px;
  }
`;

export const ChartContainer = styled.div`
  background-color: var(--box-background-color);
  padding: 28px 20px 40px 20px;
  border-radius: 30px;
  margin-bottom: 80px;

  @media only screen and (min-width: 768px) {
    padding-top: 40px;
    padding-inline: 40px;
    padding-bottom: 60px;
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  color: var(--text-color_50);
  margin-bottom: 56px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 37px;
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: 35px;
  }
`;

export const StatsWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 96px;
  }

  @media only screen and (min-width: 1440px) {
    gap: 42px;
  }
`;

export const PieChartWrapper = styled.div`
  position: relative;
  height: 150px;
  width: 292px;
  margin-inline: auto;
  margin-bottom: 60px;

  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const ChartDescr = styled.p`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 24px;
  color: var(--main-text-color);

  @media only screen and (min-width: 1440px) {
    bottom: -25px;
  }
`;

export const List = styled.ul`
  font-size: 16px;
  color: var(--text-color_50);
  max-height: 126px;
  padding-right: 28px;
  overflow: auto;

  @media only screen and (min-width: 768px) {
    width: 216px;
    margin-top: 4px;
    padding-right: 18px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 17px;
  }
`;

export const WrapperMarker = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;

  @media only screen and (min-width: 1440px) {
    margin-right: 8px;
  }
`;

export const ItemDescr = styled.p`
  margin-right: auto;
`;

export const ItemSpan = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: var(--main-text-color);
`;
