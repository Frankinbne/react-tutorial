import React from 'react';
import './style.css';//在同级引入；

const Header=()=>{
    return(
        <header >
            <h1 className={'navbar'}>This is my Header</h1>
            <h2>热爱生活</h2>
        </header>
    );
};


export default Header;