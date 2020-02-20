import React from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from "./component/Paper";
import Header from "./component/Header";
import TodoForm from "./component/TodoForm";
import Todos from "./component/Todos";

function App() {
  return (
    <Paper>
      <Header/>
      <TodoForm/>
      <Todos/>
    </Paper>
  );
}

export default App;