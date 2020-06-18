import React from 'react';
import ReactDom from 'react-dom';
import MyApp from './App';


const e = <h1> Here is my new book </h1>

ReactDom.render(
    <MyApp/>
    ,document.getElementById('root'));