import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { logoutUser } from '../../redux/Auth/operations';
import { Title, Container, Button, ButtonCancel } from './LogOutStyled';

export const LogOut = ({ toggleLogOutModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        navigate('/');
        toggleLogOutModal();
        toast.warning('In order to use the application you must log in');
      })
      .catch(() => {
        toast.error('Something wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Title>Are you sure you want to log out?</Title>
      <Container>
        <Button onClick={handleLogout} disabled={isLoading}>
          Log out
        </Button>
        <ButtonCancel onClick={toggleLogOutModal}>Cancel</ButtonCancel>
      </Container>
    </>
  );
};
