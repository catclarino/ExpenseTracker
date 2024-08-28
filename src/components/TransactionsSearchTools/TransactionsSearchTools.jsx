import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { format } from 'date-fns';

import {
  changeDate,
  changeFilter,
  resetFilter,
  selectDate,
  selectFilter,
} from '../../redux/Filter/filterSlice';

import { Icon } from '../../components/Icon/Icon';
import { UniversalButton } from '../../components/UniversalButton/UniversalButton';
import {
  FormContainer,
  FormBox,
  FilterContainer,
  FormInput,
  DatePickerContainer,
  FormCalendar,
  IconSearch,
  IconDate,
} from './TransactionsSearchToolsStyled';
import { GlobalStyle } from '../TransactionForm/DatePickerStyles';

export const TransactionsSearchTools = ({ handleOpenModal, type }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const changeFilterValue = e => {
    dispatch(changeFilter(e.target.value));
  };

  useEffect(() => {
    dispatch(resetFilter());
  }, [type, dispatch]);

  const date = useSelector(selectDate);
  const changeDateValue = e => {
    if (!e) {
      dispatch(changeDate(format(new Date(), 'yyyy-MM-dd')));
      return;
    }
    dispatch(changeDate(format(e, 'yyyy-MM-dd')));
  };

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  return (
    <FormContainer>
      <FormBox>
        <FilterContainer>
          <FormInput
            value={filter}
            onChange={changeFilterValue}
            type="text"
            placeholder="Search for anything.."
          />
          <IconSearch>
            <Icon name="search" size="20" />
          </IconSearch>
        </FilterContainer>
        <GlobalStyle />
        <DatePickerContainer>
          <FormCalendar
            selected={date}
            onChange={changeDateValue}
            showPopperArrow={false}
            maxDate={new Date()}
            placeholderText="dd/mm/yyyy"
          />
          <IconDate>
            <Icon name="calendar" size="20" />
          </IconDate>
        </DatePickerContainer>
        <UniversalButton action={handleResetFilter} type="reset" />
        <UniversalButton action={handleOpenModal} className="addBtn" />
      </FormBox>
    </FormContainer>
  );
};
