import React from 'react';
import { TodoItem } from './todo_list_item';

// module.exports = () => <h3>Todo List goes here!</h3>
export const TodoList = (props) => {
  const todoList = props.todos.map(todo => (
      TodoItem(todo)
    ));
  
   return (
   <>
      <ul>
        {todoList}
      </ul>
    </>
  )
}