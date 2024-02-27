import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ title, description }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, { task: newTask, isDone: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].isDone = !updatedTasks[index].isDone;
      return updatedTasks;
    });
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <input
        type="text"
        placeholder="Nowe zadanie"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Dodaj zadanie</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <TodoItem
              task={task.task}
              isDone={task.isDone}
              toggleTask={() => toggleTask(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;