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
 // const deleteFinishedTask = () => {
 //     setTasks((prevTasks) => {
 //       const result = []
 //       for (const task of prevTasks){
 //         if (task.isDone === false){
 //          result.push(task)}
 //       }
 //       return result
 //     });
 //     
 //   
 // };

 const deleteFinishedTask = () => {
  setTasks((prevTasks) => {
    return prevTasks.filter(task => task.isDone === false)
  
  });
  };

  const toggleTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
     updatedTasks[index] = {...updatedTasks[index], isDone: !updatedTasks[index].isDone } ;
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
      <button onClick={deleteFinishedTask}>Usuń zakończone zadanie</button>
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