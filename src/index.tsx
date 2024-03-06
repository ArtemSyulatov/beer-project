import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import { store } from 'redux-toolkit/store';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from './providers/ErrorBoundary/ErrorBoundary';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
);
