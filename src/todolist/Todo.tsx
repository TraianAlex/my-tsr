import React, { useState } from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import { Container } from 'react-bootstrap';

interface TodoState {
  id: string;
  text: string;
}

export const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoState[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <Container>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </Container>
  );
};
