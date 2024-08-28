import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { useModal } from '../../hooks/useModal';
import classNames from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

import { Modal } from '../../components';
import { CategoriesModal } from '../../components/CategoriesModal/CategoriesModal';

import { selectUser } from '../../redux/User/userSlice';
import { getFormattedDate, getFormattedTime } from '../../helpers';
import { selectTransactionsError } from '../../redux/Transaction/transactionSlice';
import { transactionSchema } from '../../schemas/validationSchema';
import {
  FormWrapper,
  TransactionFormStyled1,
  TypeLabel,
  TransactionTypes,
  CustomRadioBtn,
  RadioBtn,
  CustomFields,
  CustomField,
  DatePickerStyled,
  DatepickerContainer,
  IconStyled,
  Currency,
  CommentField,
  SubmitBtn,
  SumLabel,
  FieldWrapper,
  MessageError,
} from './TransactionFormStyled';
import { GlobalStyle } from './DatePickerStyles';

export const TransactionForm = ({
  transaction,
  transactionsType,
  onSubmitForm,
  history,
}) => {
  const user = useSelector(selectUser);
  const isError = useSelector(selectTransactionsError);
  const { currency } = user;
  const [categoryId, setCategoryId] = useState('');
  const [isOpenModalTransaction, toggleModalTransaction] = useModal();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    control,
    formState: { errors },
    clearErrors,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(transactionSchema),
  });
  const navigate = useNavigate();

  const clearFieldCategory = useCallback(
    type => {
      setValue('category', '');
      setCategoryId('');
      navigate(`/transactions/${type}`);
    },
    [setValue, setCategoryId, navigate]
  );

  const setDefaultValues = useCallback(() => {
    setValue('type', transactionsType);
    setValue('date', getFormattedDate(new Date()));
    setValue('time', getFormattedTime());
    setValue('category', '');
    setCategoryId('');
    setValue('sum', '');
    setValue('comment', '');
    clearErrors();
  }, [setValue, setCategoryId, transactionsType, clearErrors]);

  useEffect(() => {
    if (!transaction) {
      setDefaultValues();
    }

    if (transaction) {
      const { type, date, time, category, sum, comment } = transaction;

      setCategoryId(category?._id);
      setValue('type', type);
      setValue('date', date);
      setValue('time', time);
      setValue('category', category.categoryName);
      setValue('sum', sum);
      setValue('comment', comment);
    }
  }, [transaction, setValue, setDefaultValues]);

  const handleChangeCategory = item => {
    setValue('category', item.categoryName, { shouldValidate: true });
    setCategoryId(item._id);
    toggleModalTransaction();
  };

  const handleChangeDate = date => {
    const formattedDate = getFormattedDate(date);
    setValue('date', formattedDate, { shouldValidate: true });
  };

  const onSubmit = data => {
    data.category = categoryId;

    if (transaction) {
      data._id = transaction._id;
    }

    onSubmitForm(data);

    if (!isError && !transaction) {
      reset();
      setDefaultValues();
    }
  };

  const fieldClasses = fieldName => {
    return classNames({
      [`${fieldName !== 'date' ? `${fieldName}Field` : 'datePicker'}`]: true,
      errorField: errors[fieldName]?.message,
    });
  };

  const renderMessage = fieldName => {
    if (errors[fieldName]?.message) {
      return <MessageError>{errors[fieldName]?.message}</MessageError>;
    }
  };

  const radioBtnExpenses = classNames({
    typeLabel: true,
    radioLabel: transaction?.type === 'incomes' || history === 'incomes',
  });

  const radioBtnIncomes = classNames({
    typeLabel: true,
    radioLabel: transaction?.type === 'expenses' || history === 'expenses',
  });

  return (
    <FormWrapper>
      <TransactionFormStyled1 onSubmit={handleSubmit(onSubmit)}>
        <TransactionTypes>
          <TypeLabel className={radioBtnExpenses}>
            <RadioBtn
              type="radio"
              name="type"
              value="expenses"
              {...register('type')}
              disabled={
                transaction?.type === 'incomes' || history === 'incomes'
              }
              onChange={() => clearFieldCategory('expenses')}
            />
            <CustomRadioBtn />
            Expense
          </TypeLabel>
          <TypeLabel className={radioBtnIncomes}>
            <RadioBtn
              type="radio"
              name="type"
              value="incomes"
              {...register('type')}
              disabled={
                transaction?.type === 'expenses' || history === 'expenses'
              }
              onChange={() => clearFieldCategory('incomes')}
            />
            <CustomRadioBtn />
            Income
          </TypeLabel>
        </TransactionTypes>
        <GlobalStyle />
        <CustomFields>
          <CustomField>
            Date
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DatepickerContainer>
                  <DatePickerStyled
                    className={fieldClasses('date')}
                    showPopperArrow={false}
                    maxDate={new Date()}
                    selected={field.value}
                    placeholderText="mm/dd/yyyy"
                    onChange={date => {
                      field.onChange(date);
                      handleChangeDate(date);
                    }}
                    calendarClassName="fixed-height-calendar"
                  />
                </DatepickerContainer>
              )}
            />
            <IconStyled name="calendar" size="16" />
            {renderMessage('date')}
          </CustomField>
          <CustomField>
            Time
            <input
              className={fieldClasses('time')}
              type="time"
              name="time"
              {...register('time')}
            />
            <IconStyled name="clock" size="16" />
            {renderMessage('time')}
          </CustomField>
        </CustomFields>
        <FieldWrapper>
          <label>Category</label>
          <input
            className={fieldClasses('category')}
            type="text"
            name="category"
            placeholder="Different"
            autoComplete="off"
            {...register('category')}
            required
            readOnly
            onClick={toggleModalTransaction}
          />
          {renderMessage('category')}
        </FieldWrapper>
        <SumLabel>
          Sum
          <input
            className={fieldClasses('sum')}
            type="number"
            name="sum"
            placeholder="Enter the sum"
            autoComplete="off"
            {...register('sum')}
          />
          <Currency>{currency?.toUpperCase()}</Currency>
          {renderMessage('sum')}
        </SumLabel>
        <FieldWrapper>
          <label>Comment</label>
          <CommentField
            className={fieldClasses('comment')}
            name="comment"
            placeholder="Enter the text"
            {...register('comment')}
          />
          {renderMessage('comment')}
        </FieldWrapper>
        <SubmitBtn type="submit" disabled={Object.entries(errors).length}>
          {transaction ? 'Save' : 'Add'}
        </SubmitBtn>
      </TransactionFormStyled1>
      {isOpenModalTransaction && (
        <Modal toggleModal={toggleModalTransaction}>
          <CategoriesModal
            transportCategory={handleChangeCategory}
            type={getValues('type')}
          />
        </Modal>
      )}
    </FormWrapper>
  );
};

export default TransactionForm;
