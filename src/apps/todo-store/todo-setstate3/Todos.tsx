import React from 'react';
import { todoAddHandler, createList, todoDeleteHandler } from './TodoStore';
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
      <NewTodoForm onAddTodo={todoAddHandler} createList={createList} />
      <List />
      <Count />
      <TodoList onDeleteTodo={todoDeleteHandler} />
    </Container>
  );
};

export default Todos;
