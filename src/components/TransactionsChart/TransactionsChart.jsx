import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import { Chart } from 'components';
import { countCategories } from '../../helpers';
import {
  selectTransactions,
  selectTransactionsError,
} from '../../redux/Transaction/transactionSlice';
import { selectUser } from '../../redux/User/userSlice';
import { fetchCurrentUser } from '../../redux/User/operations';

import warningImg from '../../assets/images/no_data_abstract.png';
import errorImg from '../../assets/images/server-error.png';

import {
  ChartContainer,
  Title,
  StatsWrapper,
  PieChartWrapper,
  ChartDescr,
  List,
  ListItem,
  WrapperMarker,
  ItemDescr,
  ItemSpan,
  WarningWrapper,
  WarningTitle,
  ImgNoData,
  ImgNoTransactions,
} from './TransactionsChartStyled';

export const TransactionsChart = ({ transactionsType }) => {
  const [categoriesData, setCategoriesData] = useState(null);
  const dispatch = useDispatch();

  const { totalIncomes, totalExpenses } = useSelector(selectUser);
  const error = useSelector(selectTransactionsError);
  const data = useSelector(selectTransactions);

  const totalRef = useRef(
    transactionsType === 'Incomes' ? totalIncomes : totalExpenses
  );

  useEffect(() => {
    totalRef.current =
      transactionsType === 'Incomes' ? totalIncomes : totalExpenses;
  }, [totalIncomes, totalExpenses, transactionsType]);

  useEffect(() => {
    if (data === null) return;

    dispatch(fetchCurrentUser())
      .unwrap()
      .then(() => {
        setCategoriesData(countCategories(data, totalRef.current));
      })
      .catch();
  }, [data, dispatch]);

  if (data === null || categoriesData === null) return;

  if (error)
    return (
      <WarningWrapper>
        <WarningTitle>
          Sorry, something went wrong. Please try again...
        </WarningTitle>
        <ImgNoData src={errorImg} alt="Error fetch" />
      </WarningWrapper>
    );

  return !categoriesData.length ? (
    <WarningWrapper>
      <WarningTitle>
        You don't have any {transactionsType.toLowerCase()} in this month.
      </WarningTitle>
      <ImgNoTransactions src={warningImg} alt="No data" />
    </WarningWrapper>
  ) : (
    <ChartContainer>
      <Title>{transactionsType} categories</Title>
      <StatsWrapper>
        <PieChartWrapper>
          <Chart data={categoriesData} />
          <ChartDescr>100%</ChartDescr>
        </PieChartWrapper>
        <List className="scroll scrollA">
          {categoriesData.map((item, index) => (
            <ListItem key={index}>
              <WrapperMarker
                style={{ backgroundColor: item.color }}
              ></WrapperMarker>
              <ItemDescr>{item.name}</ItemDescr>
              <ItemSpan>{item.value}%</ItemSpan>
            </ListItem>
          ))}
        </List>
      </StatsWrapper>
    </ChartContainer>
  );
};
