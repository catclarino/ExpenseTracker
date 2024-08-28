import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { selectUser } from '../../redux/User/userSlice';
import { getCurrencyChar } from '../../helpers/getCurrencyChar';
import { getPath } from '../../helpers/getPath';
import {
  Wrapper,
  List,
  ListItem,
  StyledLink,
  IconContainer,
  StyledIcon,
  AmountTitle,
  AmountDescr,
} from './TransactionsTotalAmountStyled';

export const TransactionsTotalAmount = ({
  totalAllExpenses = null,
  totalAllIncomes = null,
}) => {
  const [path, setPath] = useState({});
  const location = useLocation();

  const { totalIncomes, totalExpenses, currency } = useSelector(selectUser);
  const currencyChar = getCurrencyChar(currency);

  useEffect(() => {
    setPath(getPath(location));
  }, [location]);

  return (
    <Wrapper>
      <List>
        <ListItem>
          <StyledLink to={path.incomes}>
            <IconContainer>
              <StyledIcon name="arrow-up" size="18" />
            </IconContainer>
          </StyledLink>
          <div>
            <AmountTitle>Total Income</AmountTitle>
            <AmountDescr>
              {currencyChar}
              {totalAllIncomes || totalIncomes}
            </AmountDescr>
          </div>
        </ListItem>
        <ListItem>
          <StyledLink to={path.expenses}>
            <IconContainer>
              <StyledIcon name="arrow-down" size="18" />
            </IconContainer>
          </StyledLink>
          <div>
            <AmountTitle>Total Expense</AmountTitle>
            <AmountDescr>
              {currencyChar}
              {totalAllExpenses || totalExpenses}
            </AmountDescr>
          </div>
        </ListItem>
      </List>
    </Wrapper>
  );
};
