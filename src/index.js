import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { persistor, store } from './redux/store';
import { App } from './components/index';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/ExpenseTracker">
        <App />
        <ToastContainer
          theme="dark"
          style={{ zIndex: 99999 }}
          autoClose={2000}
        />
      </BrowserRouter>
    </PersistGate>
    </Provider>
    </React.StrictMode>
);