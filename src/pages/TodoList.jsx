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

const addTodo = value => {
    const addedTodo = [...todos, { text: value}]

    setTodos(addedTodo)
}

  return (
    <Paper>
      <Header/>
      <TodoForm addTodo={addTodo}/>
      <Todos todos={todos}/>
    </Paper>
  );
}

export default TodoList;