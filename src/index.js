import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './assets/data/store';
import { PersistGate } from 'redux-persist/lib/integration/react'


import './index.css';
import App from './App';

const {store, persistor} = configureStore();
ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
  </Provider>
  , document.getElementById('root')
);

