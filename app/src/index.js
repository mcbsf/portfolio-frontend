import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Portfolio from './portfolio/Portfolio';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.css';
import HeaderLike from './header/Header';

import { Provider } from "react-redux";

import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderLike />
    <Provider store={store}>
      <Portfolio />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
