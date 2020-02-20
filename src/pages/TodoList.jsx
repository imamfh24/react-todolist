import React, {useState} from 'react';


import Paper from "../component/Paper";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import Todos from "../component/Todos";

const TodoList = () => {

const [todos, setTodos] = useState([
    { text: "Learning React!" },
    { text: "Learning React!" },
    { text: "Learning React!" },
])

  return (
    <Paper>
      <Header/>
      <TodoForm/>
      <Todos todos={todos}/>
    </Paper>
  );
}

export default TodoList;