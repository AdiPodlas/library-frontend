import React from 'react';

const TodoItem = ({ task, isDone, toggleTask }) => {
  const taskStyle = {
    textDecoration: isDone ? 'line-through' : 'none',
    color: isDone ? 'green' : 'gray',
  };

  return (
    <div>
      <span style={taskStyle}>{task} </span>
      <button onClick={toggleTask}>Przełącz</button>
    </div>
  );
};

export default TodoItem;