import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {createStore} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react';

const store = createStore(rootReducer,composeWithDevTools())
ReactDOM.render(
  <Provider store={store}>


  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);