import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  //browser router gives the component inside it all the functions that routing provides
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

