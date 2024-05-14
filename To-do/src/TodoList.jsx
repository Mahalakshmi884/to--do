import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onUpdateTodo, onDeleteTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onUpdateTodo={onUpdateTodo} 
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
