import React from 'react';
import './App.css';
import TodoList from './TaskList';
import UsersList from './UsersList';

function App() {
  return (
    <div className="container">
      <h1>Nowa Lista Zadań</h1>
      <header className="App-header">
      <UsersList/>
        <TodoList title="To do list" />
      </header>
    </div>
  );
}

export default App;