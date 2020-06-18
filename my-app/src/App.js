import React from 'react';
import BtnNew from './Button' ;
import Footer from './Footer';
import Header from './Header';
import './style.css';//在同级引入；



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


const MyApp=()=>{
    return(
        <div className={'boss'}>
            <Header/>
            <section>
                <h1>Bob Zark</h1>
                <p>This is a paragraph about me...</p>
                <ul>
                    <li>Hongkong</li>
                    <li>Beijing</li>
                    <li>ShangHai</li>
                </ul>
                <br/>
                <BtnNew/>
            </section>



            <Footer/>

        </div>
    );
};

export default MyApp;