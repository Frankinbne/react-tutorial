import React from 'react';
import TodoItem from './TodoItem'
import './todo.css';//在同级引入；

function AppTodo(){
    return(
        <div className={'todo-list'}>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    );

};

export default AppTodo;