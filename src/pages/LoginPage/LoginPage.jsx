import AuthForm from '../../components/AuthForm/AuthForm';
import { LoginContainer } from './LoginPageStyled';

export const LoginPage = () => {
  return (
    <LoginContainer>
      <AuthForm signIn />
    </LoginContainer>
  );
};

export default LoginPage;
