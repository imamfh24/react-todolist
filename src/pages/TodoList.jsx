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
const [showAdd, setShowAdd] = useState(false);

const addTodo = value => {
    const addedTodo = [...todos, { text: value}]

    setTodos(addedTodo)
}

const showAddToggle = () => setShowAdd(!showAdd);

console.log("showAdd", showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd}/>
      <TodoForm addTodo={addTodo} showAdd={showAdd}/>
      <Todos todos={todos}/>
    </Paper>
  );
}

export default TodoList;