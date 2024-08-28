import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
//import classNames from 'classnames';

import { BgImageWrapper } from 'components/BgImgWrapper/BgImgWrapper';
//import { Icon } from 'components';
import { loginUser, registerUser } from '../../redux/Auth/operations';
import { signUpSchema, signInSchema } from '../../schemas/validationSchema';
import {
  Container,
  ContainerImg,
  ContainerTitle,
  Title,
  Text,
  Button,
  ContainerForm,
  StyledIcon,
  StyledNavLink,
  Form,
  Input,
  ContainerIcon,
  SuccessIcon,
  ErrorIcon,
  ContainerLink,
  //Link,
  Span,
  MessageErr,
  MessageSec,
  // EyeButton,
} from './AuthFormStyled';

const AuthForm = ({ signUp }) => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUp ? signUpSchema : signInSchema),
  });
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const inputClass = fieldName => {
    return {
      errorInput: errors[fieldName]?.message && dirtyFields[fieldName],
      successInput: !errors[fieldName]?.message && dirtyFields[fieldName],
    };
  };

  const renderMessage = fieldName => {
    if (errors[fieldName]?.message && dirtyFields[fieldName]) {
      return <MessageErr>{errors[fieldName]?.message}</MessageErr>;
    }
    return (
      <MessageSec>
        {!errors[fieldName]?.message && dirtyFields[fieldName]
          ? `${fieldName.charAt(0).toUpperCase()}${fieldName.slice(
              1
            )} is entered correct`
          : ''}
      </MessageSec>
    );
  };

  const onSubmit = data => {
    const { name, email, password } = data;

    const userData = {
      email,
      password,
    };

    if (signUp) {
      userData.name = name;
    }

    dispatch(signUp ? registerUser(userData) : loginUser(userData))
      .unwrap()
      .then(userName => {
        reset();
        toast.success(
          signUp
            ? `Welcome, ${userName.name}!`
            : `Welcome, ${userName.user.name}!`
        );
        signUp && navigate('/login');
      })
      .catch(error => {
        if (error.response.status === 400) {
          toast.error('Invalid data. Please check your input.');
        } else if (error.response.status === 409) {
          toast.error('User already exists. Please choose a different email.');
        } else if (error.response.status === 403) {
          toast.error('Invalid password.');
        } else {
          toast.error('An error occurred. Please try again later.');
        }
      });
  };

  return (
    <Container>
      <ContainerImg>
        <BgImageWrapper />
      </ContainerImg>
      <div>
        <ContainerTitle>
          <Title>{signUp ? 'Sign Up' : 'Sign In'}</Title>
          <Text>
            {signUp
              ? 'Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.'
              : 'Welcome back to effortless expense tracking! Your financial dashboard awaits.'}
          </Text>
        </ContainerTitle>
        <ContainerForm>
          <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
              {signUp && (
                <ContainerIcon>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className={inputClass('name')}
                    {...register('name')}
                  />
                  {!errors.name?.message && dirtyFields.name && (
                    <SuccessIcon name="success" size="16" />
                  )}
                  {errors.name?.message && dirtyFields.name && (
                    <ErrorIcon name="error" size="16" />
                  )}
                  {renderMessage('name')}
                </ContainerIcon>
              )}

              <ContainerIcon>
                <Input
                  name="email"
                  type="text"
                  placeholder="Email"
                  className={inputClass('email')}
                  {...register('email')}
                />
                {!errors.email?.message && dirtyFields.email && (
                  <SuccessIcon name="success" size="16" />
                )}
                {errors.email?.message && dirtyFields.email && (
                  <ErrorIcon name="error" size="16" />
                )}
                {renderMessage('email')}
              </ContainerIcon>
              <div>
                <ContainerIcon>
                  <Input
                    name="password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Password"
                    className={inputClass('password')}
                    {...register('password')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(prev => !prev)}
                  >
                    {showPass ? (
                      <StyledIcon name="eye" size="16" />
                    ) : (
                      <StyledIcon name="eye-off" size="16" />
                    )}
                  </button>
                  {renderMessage('password')}
                </ContainerIcon>
              </div>
              <div>
                <Button type="submit">{signUp ? 'Sign Up' : 'Sign In'}</Button>
              </div>
            </Form>
          </Container>
        </ContainerForm>
        <ContainerLink>
          <StyledNavLink to={signUp ? '/login' : '/register'}>
            {signUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <Span>{signUp ? 'Sign In' : 'Sign Up'}</Span>
          </StyledNavLink>
        </ContainerLink>
      </div>
    </Container>
  );
};

export default AuthForm;
