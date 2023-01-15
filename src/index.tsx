import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TransactionsProvider } from './contexts/transactionsContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TransactionsProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </TransactionsProvider>
  </React.StrictMode>
);
