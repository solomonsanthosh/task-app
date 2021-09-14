import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {createStore} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import  rootReducer  from './reducer/index'
import {persistStore} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


const store = createStore(rootReducer,composeWithDevTools())
const persistor = persistStore(store)
ReactDOM.render(
  <Provider store={store}>


  <BrowserRouter>
   <PersistGate persistor={persistor}>
      <App />
    </PersistGate>   
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
