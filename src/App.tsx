import React from 'react';
import './App.css';
import { TransactionsProvider } from './contexts/transactionsContext';
import RoutesMain from './routes';


function App() {
  return (
    <div className="App">
      <RoutesMain/>
    </div>
  );
}

export default App;
