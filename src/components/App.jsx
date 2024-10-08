import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import { refreshUser } from '../redux/Auth/operations';
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import { selectIsRefreshing } from '../redux/Auth/authSlice';
import Loader from './Loader/Loader';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const TransactionsPage = lazy(() =>
  import('../pages/TransactionPage/TransactionPage')
);
const TransactionsHistoryPage = lazy(() =>
  import('../pages/TransactionHistoryPage/TransactionHistoryPage')
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute
                component={<WelcomePage />}
                redirectTo="/transactions/expenses"
              />
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute
                component={<LoginPage />}
                redirectTo="/transactions/expenses"
              />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute component={<RegisterPage />} redirectTo="/login" />
            }
          />
          <Route
            path="/transactions/:transactionsType"
            element={
              <PrivateRoute
                component={<TransactionsPage />}
                redirectTo="/login"
              />
            }
          />
          <Route
            path="/transactions/history/:transactionsType"
            element={
              <PrivateRoute
                component={<TransactionsHistoryPage />}
                redirectTo="/login"
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
