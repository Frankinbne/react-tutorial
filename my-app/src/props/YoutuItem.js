import React from 'react';
import './you.css';//在同级引入；

function YoutuItem(props){
    return(
        <div className={'contact-card'}>
        <img src={props.imgUrl} />
        <h3>{props.name}</h3>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
        <button>{props.btnText}</button>
    </div>
    )

};

export default YoutuItem;

