import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import { TransactionsItem } from './TransactionsItems';
import { selectFilter } from '../../redux/Filter/filterSlice';
import {
  editTransaction,
  getTransactions,
} from '../../redux/Transaction/operations';
import { selectTransactions } from '../../redux/Transaction/transactionSlice';
import { useModal } from '../../hooks/useModal';
import { fetchCurrentUser } from '../../redux/User/operations';
import { Modal, TransactionForm } from '../../components';
import { TransactionsMessage } from '../../components/TransactionsMessage/TransactionsMessage';
import {
  ContainerTable,
  ListTable,
  Thead,
  Tbody,
  Tr,
  Th,
  NoResults,
  Scrollable,
} from './TransactionsListStyled';

export const TransactionsList = () => {
  const { transactionsType } = useParams();
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);

  const onSubmitForm = transaction => {
    dispatch(editTransaction(transaction))
      .unwrap()
      .then(() => {
        dispatch(fetchCurrentUser());
        dispatch(getTransactions({ type: transactionsType }));
        toast.success('Transaction edited successfully!');
        toggleEditTransaction();
      })
      .catch(error => {
        toast.error('Something went wrong!');
      });
  };

  const [isOpenEditTransaction, toggleEditTransaction] = useModal();

  const filter = useSelector(selectFilter);
  const getFilterValue = () => {
    return transactions.filter(
      item =>
        item.category.categoryName
          .toLowerCase()
          .includes(filter.toLowerCase()) ||
        item.comment.toLowerCase().includes(filter.toLowerCase()) ||
        item.date.includes(filter) ||
        item.time.includes(filter) ||
        item.sum.toString().includes(filter)
    );
  };
  const filterItems = getFilterValue();

  const [currentItem, setCurrentItem] = useState({});

  const handleOpenModal = item => {
    setCurrentItem(item);
    toggleEditTransaction();
  };

  return (
    <ContainerTable>
      <Scrollable className="scroll scrollB">
        <ListTable>
          <Thead>
            <Tr>
              <Th width="18%" $pl="20px">
                Category
              </Th>
              <Th width="16%" $pl="5px">
                Comment
              </Th>
              <Th width="15%" $pl="2px">
                Date
              </Th>
              <Th width="10%">Time</Th>
              <Th width="20%" $pl="13px">
                Sum
              </Th>
              <Th width="19%" $pl="3px">
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody className="scroll scrollB">
            {transactions.length === 0 && (
              <NoResults>
                <TransactionsMessage
                  message={`Transaction ${transactionsType} list is empty!`}
                />
              </NoResults>
            )}
            {filterItems.length !== 0 &&
              filterItems.map(item => (
                <TransactionsItem
                  key={item._id}
                  item={item}
                  handleOpenModal={handleOpenModal}
                />
              ))}
            {filter &&
              filterItems.length === 0 &&
              transactions.length !== 0 && (
                <NoResults>
                  <TransactionsMessage message="Nothing found by filter!" />
                </NoResults>
              )}
          </Tbody>
        </ListTable>
      </Scrollable>
      {isOpenEditTransaction && (
        <Modal toggleModal={toggleEditTransaction}>
          <TransactionForm
            transaction={currentItem}
            onSubmitForm={onSubmitForm}
          />
        </Modal>
      )}
    </ContainerTable>
  );
};
