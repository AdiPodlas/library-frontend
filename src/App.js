import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TodoList from './TaskList';
import UsersList from './UsersList';
import BooksList from './BooksList';
import CartList from './CartList';
import Layout from './Layout';
import NoPage from './NoPage';
import SandBox from './SandBox';

function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
        <Layout> 
        
          <Routes>
            <Route index element={<BooksList />} />
            <Route path="users" element={<UsersList />} />
            <Route path="carts" element={<CartList />} />
            <Route path="toDos" element={<TodoList title="To do list" />} />
            <Route path="SandBox" element={<SandBox />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;