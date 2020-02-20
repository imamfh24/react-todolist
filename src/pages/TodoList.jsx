import React from 'react';


import Paper from "../component/Paper";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import Todos from "../component/Todos";

const TodoList = () => {
  return (
    <Paper>
      <Header/>
      <TodoForm/>
      <Todos/>
    </Paper>
  );
}

export default TodoList;