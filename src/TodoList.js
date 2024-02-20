import React, {useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = `Zadanie ${tasks.length + 1}`;
    setTasks((prevTasks) => [...prevTasks, { task: newTask, isDone: false }]);
  };

  const toggleTask =(index) => {
    console.log ("Wiadomość", index)
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];

      console.log(updatedTasks[index])
      updatedTasks[index].isDone = !updatedTasks[index].isDone;
      return updatedTasks;
    });
  };

  return (
    <div>
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