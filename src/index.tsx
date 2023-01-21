import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TransactionsProvider } from './contexts/transactionsContext';
import App from './App';
import { GlobalStyle } from './style/global';
import { TypographyStyle } from './style/typography';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TransactionsProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <TypographyStyle/>
        <App />
      </BrowserRouter>
    </TransactionsProvider>
  </React.StrictMode>
);
