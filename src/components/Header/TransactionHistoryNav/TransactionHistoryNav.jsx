import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  ButtonWrapper,
  MobileNavBtn,
  NavBtnActive,
  StyledLink,
} from './TransactionHistoryNavStyled';

const TransactionsHistoryNav = ({
  activeButton,
  handleButtonAndToggleMenu,
}) => {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const { transactionsType } = useParams();

  useEffect(() => {
    handleButtonAndToggleMenu(transactionsType);
  }, [transactionsType, handleButtonAndToggleMenu]);

  const changeActiveButtonStyleDesktop = buttonName => {
    return activeButton === buttonName ? NavBtnActive : MobileNavBtn;
  };

  const changeActiveButtonStyleMobile = currentPage => {
    const currentUrl = window.location.pathname;
    return currentUrl === currentPage ? NavBtnActive : MobileNavBtn;
  };

  return (
    <ButtonWrapper>
      <StyledLink to="/transactions/history/expenses">
        <MobileNavBtn
          as="button"
          className={
            isMobileScreen
              ? changeActiveButtonStyleMobile('/transactions/history/expenses')
              : changeActiveButtonStyleDesktop('expense')
          }
          onClick={() => handleButtonAndToggleMenu('expense')}
        >
          All Expense
        </MobileNavBtn>
      </StyledLink>

      <StyledLink to="/transactions/history/incomes">
        <MobileNavBtn
          as="button"
          className={
            isMobileScreen
              ? changeActiveButtonStyleMobile('/transactions/history/incomes')
              : changeActiveButtonStyleDesktop('income')
          }
          onClick={() => handleButtonAndToggleMenu('income')}
        >
          All Incomes
        </MobileNavBtn>
      </StyledLink>
    </ButtonWrapper>
  );
};

export default TransactionsHistoryNav;
