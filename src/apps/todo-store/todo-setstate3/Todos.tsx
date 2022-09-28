import React from 'react';
import TodoList from './TodoList';
import NewTodoForm from './NewTodo';
import { Container } from 'react-bootstrap';
import { Decoration } from './Decoration';
import { Count } from './Count';
import { List } from './List';

export const Todos: React.FC = () => {
  console.log('render Todos');

  return (
    <Container>
      <Decoration />
      <NewTodoForm />
      <List />
      <Count />
      <TodoList />
    </Container>
  );
};

export default Todos;
