import React, { useState } from 'react';
import TodoItem from './TodoItem';

function Counter(props) {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  const addTask = () => {
    const newTask = `Zadanie ${tasks.length + 1}`;
    setTasks((prevTasks) => [...prevTasks, { task: newTask, isDone: false }]);
  };

  const toggleTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].isDone = !updatedTasks[index].isDone;

      if (updatedTasks[index].isDone) {
        setCompletedTasks((prevCompletedTasks) => prevCompletedTasks + 1);
      } else {
        setCompletedTasks((prevCompletedTasks) => prevCompletedTasks - 1);
      }

      return updatedTasks;
    });
  };

  return (
    <>
      <h1 style={{ marginLeft: "0px" }}>{props.title}</h1>
      <div style={{ marginLeft: "0px", marginTop: "10px" }}>
        <button onClick={addTask}>Dodaj zadanie</button>
        <p>Wykonane: {completedTasks}</p>
        <p>Niewykonane: {tasks.length - completedTasks}</p>
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
    </>
  );
}

export default Counter;