import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo({
      id: Date.now(),
      name,
      description,
      status: 'notCompleted'
    });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Task Name" 
        required
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
