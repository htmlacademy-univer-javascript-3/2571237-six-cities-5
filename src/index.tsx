import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ToastContainer />
      <App />
    </React.StrictMode>
  </Provider>
);
