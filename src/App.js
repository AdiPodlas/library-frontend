import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="container">
      Siema Elo
      <header className="App-header">
        <TodoList title="Zadania" />
    
      </header>
    </div>
  );
}

export default App;
