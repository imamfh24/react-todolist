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
  
  if(todos.length < 10){
    const addedTodo = [...todos, { text: value , isCompleted: false}]
    setTodos(addedTodo)
  } else {
    return alert('You only can added 10 Todo List')
  }

}

const completeTodo = (index) => {
  const addedTodo = [...todos]
  addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

  setTodos(addedTodo);
}

const clearTodo = () => setTodos([]);
const showAddToggle = () => setShowAdd(!showAdd);

console.log("showAdd", showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} clearTodo={clearTodo}/>
      <TodoForm addTodo={addTodo} showAdd={showAdd}/>
      <Todos todos={todos} completeTodo={completeTodo}/>
    </Paper>
  );
}

export default TodoList;