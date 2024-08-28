import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  TransactionForm,
  TransactionsChart,
  TransactionsTotalAmount,
} from '../../components';
import {
  addTransaction,
  getTransactions,
} from '../../redux/Transaction/operations';
import { fetchCurrentUser } from '../../redux/User/operations';

import {
  Wrapper,
  TitleWrapper,
  Title,
  Description,
  Total,
  FormWrapper,
  ChartWrapper,
} from './TransactionPageStyled';

const TransactionsPage = () => {
  const dispatch = useDispatch();
  const { transactionsType } = useParams();

  useEffect(() => {
    dispatch(getTransactions({ type: transactionsType }));
  }, [dispatch, transactionsType]);

  const capitalizedType =
    transactionsType[0].toUpperCase() + transactionsType.slice(1);

  const onSubmitForm = transaction => {
    dispatch(addTransaction(transaction))
      .unwrap()
      .then(() => {
        dispatch(fetchCurrentUser());
        toast.success('Transaction added successfully!');
      })
      .catch(error => {
        toast.error('Something went wrong!');
      });
  };

  return (
    <div className="container">
      <Wrapper>
        <TitleWrapper>
          <Title>{capitalizedType.slice(0, -1)} Log</Title>
          <Description>
            Capture and organize every penny spent with ease! A clear view of
            your financial habits at your fingertips.
          </Description>
        </TitleWrapper>
        <Total>
          <TransactionsTotalAmount />
        </Total>
        <FormWrapper>
          <TransactionForm
            transactionsType={transactionsType}
            onSubmitForm={onSubmitForm}
          />
        </FormWrapper>
        <ChartWrapper>
          <TransactionsChart transactionsType={capitalizedType} />
        </ChartWrapper>
      </Wrapper>
    </div>
  );
};

export default TransactionsPage;
