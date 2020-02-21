import React, {useState} from 'react';


import Paper from "../component/Paper";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import Todos from "../component/Todos";

const TodoList = () => {

const [todos, setTodos] = useState([
    { text: "Learning React!" , isCompleted: false},
    { text: "Learning React!" , isCompleted: false },
    { text: "Learning React!" , isCompleted: false },
])
const [showAdd, setShowAdd] = useState(false);

const addTodo = value => {
    const addedTodo = [...todos, { text: value}]

    setTodos(addedTodo)
}

const completeTodo = (index) => {
  const addedTodo = [...todos]
  addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

  setTodos(addedTodo);
}

const showAddToggle = () => setShowAdd(!showAdd);

console.log("showAdd", showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd}/>
      <TodoForm addTodo={addTodo} showAdd={showAdd}/>
      <Todos todos={todos} completeTodo={completeTodo}/>
    </Paper>
  );
}

export default TodoList;