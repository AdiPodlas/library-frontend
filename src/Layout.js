import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav>
        <ul>
          <li>
            <Link to="/"> Lista książek </Link>
          </li>
          <li>
            <Link to="/carts"> Lista koszyków </Link>
          </li>
          <li>
            <Link to="/users"> Lista użytkowników </Link>
          </li>
          <li>
            <Link to="/toDos"> Lista zadań </Link>
          </li>
          <li>
            <Link to="/SandBox"> Piaskownica </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;