import React from 'react';

function TodoItem({ todo, onUpdateTodo, onDeleteTodo }) {
  const handleStatusChange = (event) => {
    onUpdateTodo(todo.id, { status: event.target.value });
  };

  return (
    <div className="task-card">
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
      <select value={todo.status} onChange={handleStatusChange}>
        <option value="completed">Completed</option>
        <option value="notCompleted">Not Completed</option>
      </select>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
