import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const trilogy = {
  title: ['The Fellowship of the Ring', 'The Two Towers', 'The Return of the King'],
  hours: ['2', '2', '3'],
  minutes: ['58', '59', '21']
}

ReactDOM.render(
  <React.StrictMode>
    <App trilogy={trilogy}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
