import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="container">
      <h1>Nowa Lista Zadań</h1>
      <header className="App-header">
        <TodoList title="To do list" />
      </header>
    </div>
  );
}

export default App;