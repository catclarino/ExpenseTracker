import AuthForm from '../../components/AuthForm/AuthForm';
import { RegisterContainer } from './RegisterStyled';

export const RegisterPage = () => {
  return (
    <RegisterContainer>
      <AuthForm signUp />
    </RegisterContainer>
  );
};

export default RegisterPage;
