import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import amountSlice from './slice/amountSlice';
import bonusSlice from './slice/bonusSlice';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    amount: amountSlice,
    bonus: bonusSlice
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

