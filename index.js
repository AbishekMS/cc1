import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Apps from './exp-one';
 //import Apps from './exp-oneofTwo';
//import Sample from './day-four';
//import Webpage from './day-two';
import ArraySum from './dayFive';
//import Webpage2 from './day-three';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ArraySum/>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
