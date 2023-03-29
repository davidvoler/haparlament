import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { history} from './main/history';
import store from './main/store';
import App from './main/app';


const app = (
  <Provider store={store}>
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>
  </Provider>
);
