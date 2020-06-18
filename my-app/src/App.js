import React from 'react';
import BtnNew from './Button' ;
import Footer from './Footer';
import Header from './Header';


/* const MyBook=()=>{
    return(
        <>
            <h4> 三国演义</h4>
            <p>作者；罗贯中</p>
            <p>年代：侏罗纪时代</p>
            <input/><br/>
            <button>{props.text}</button>
        </>
    );
}; */




/* function MyBook(){
    return(
        <ul>
        <li>11212</li>
        <li>11212</li>
        <li>11212</li>
        <li>11212</li></ul>
    );
} */


const MyBook=()=>{
    return(
        <div>
            <Header/>
            <h1>Bob Zark</h1>
            <p>This is a paragraph about me...</p>
            <ul>
                <li>Hongkong</li>
                <li>Beijing</li>
                <li>ShangHai</li>
            </ul>
            <br/>
            <BtnNew/>
            <Footer/>

        </div>
    );
};

export default MyBook;