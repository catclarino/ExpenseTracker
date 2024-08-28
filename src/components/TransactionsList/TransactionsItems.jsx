import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Shorter, ShorterDate } from './Shorter';
import {
  deleteTransaction,
  getTransactions,
} from '../../redux/Transaction/operations';
import { fetchCurrentUser } from '../../redux/User/operations';
import { selectCurrency } from '../../redux/User/userSlice';
import { useParams } from 'react-router-dom';
import {
  Tr,
  Td,
  BtnContainer,
  BtnTable,
  BtnTableDel,
  IconEdit,
  IconDelete,
  TextEdit,
  TextCont,
} from './TransactionsItemsStyled';

export const TransactionsItem = ({ item, handleOpenModal }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const { transactionsType } = useParams();

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const dispatch = useDispatch();

  const handleDeleteTransaction = id => {
    dispatch(deleteTransaction(id))
      .unwrap()
      .then(() => {
        dispatch(fetchCurrentUser());
        dispatch(getTransactions({ type: transactionsType }));
        toast.success('Transaction deleted successfully');
      })
      .catch(error => toast.error('Something went wrong!'));
  };

  const convertDate = dateString => {
    const dateObj = new Date(dateString);
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const dayOfWeek = days[dateObj.getDay()];
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const formattedDate = `${dayOfWeek}, ${
      day[0] === '0' ? day.substring(1) : day
    }.${month.toString().padStart(2, '0')}.${year}`;
    return formattedDate;
  };

  const currency = useSelector(selectCurrency);

  return (
    <Tr key={item._id}>
      <Td width="18%">{Shorter(item.category.categoryName, windowSize)}</Td>
      <Td width="15%">{Shorter(item.comment, windowSize)}</Td>
      <Td width="15%">{ShorterDate(convertDate(item.date), windowSize)}</Td>
      <Td width="12%">{item.time}</Td>
      <Td width="18%">
        {item.sum} / {currency.toUpperCase()}
      </Td>
      <Td width="20%">
        <BtnContainer>
          <BtnTable onClick={() => handleOpenModal(item)}>
            <IconEdit name="edit" size="16" />
            <TextEdit>Edit</TextEdit>
          </BtnTable>
          <BtnTableDel onClick={() => handleDeleteTransaction(item._id)}>
            <IconDelete name="trash-bin" size="16" />
            <TextCont>
              <span>Delete</span>
            </TextCont>
          </BtnTableDel>
        </BtnContainer>
      </Td>
    </Tr>
  );
};
