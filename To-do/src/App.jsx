import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Filter from './Filter';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, updatedTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, ...updatedTask } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    return filter === 'completed' ? todo.status === 'completed' : todo.status === 'notCompleted';
  });

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <Filter value={filter} onChange={setFilter} />
      <TodoList 
        todos={filteredTodos} 
        onUpdateTodo={updateTodo} 
        onDeleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default App;
