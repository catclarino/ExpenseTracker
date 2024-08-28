import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

import { selectCurrency, selectName } from '../../../redux/User/userSlice';
import { changeUserInfo } from '../../../redux/User/operations';
import { UserSetsFormSelect } from './UserSetsFormSelect/UserSetsFormSelect';
import { useIsLoading } from '../../../hooks/useIsLoading';
import { updateUserShema } from '../../../schemas/updateUserSchema';

import {
  Form,
  FormWrapper,
  Input,
  InputMessage,
  ButtonSubmit,
} from './UserSetsFormStyled';

export const UserSetsForm = ({ toggleModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currency, setCurrency] = useState(useSelector(selectCurrency));

  const name = useSelector(selectName);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(updateUserShema) });
  const customDispatch = useIsLoading();

  const onSubmit = data => {
    customDispatch(changeUserInfo, data, setIsLoading);
    toggleModal();
  };

  const totalInputClass = classNames({
    inputErr: errors.name?.message,
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <UserSetsFormSelect
          register={register}
          setValue={setValue}
          currency={currency}
          setCurrency={setCurrency}
        />
        <Input
          className={totalInputClass}
          {...register('name', { required: true, minLength: 2 })}
          defaultValue={name}
        />
      </FormWrapper>
      <InputMessage>{errors.name?.message}</InputMessage>
      <ButtonSubmit disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Save'}
      </ButtonSubmit>
    </Form>
  );
};
