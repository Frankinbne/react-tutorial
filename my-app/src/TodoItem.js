import React from 'react';
import './todo.css';//在同级引入；

const TodoItem=()=>{
    return(
        <div className={'todo-item'}>
            <input type={'checkbox'}></input>
            <p>Placeholder text here</p>
        </div>
    );
   
};


export default TodoItem;




