import React from 'react';
import {Provider} from 'react-redux';
import TodoListContainer from './todos/todo_list_container'

const App = ({ store }) => {
  return (
    // <Provider store={store}>
      <main className="App">
        <h1>To-Do List</h1>
        <TodoListContainer />
      </main>
    /* </Provider> */
  )
}

export default App;