import React from 'react';
import { SET_USER, todoStore } from './TodoStore';
import TodoList from './TodoList';
import NewTodoForm from './NewTodo';
import { Container } from 'react-bootstrap';
import { Decoration } from './Decoration';
import { Count } from './Count';
import { List } from './List';
import { Header } from './Header';

const { dispatch } = todoStore;

dispatch({ type: SET_USER, value: 'Alex' });

const Todos: React.FC = () => {
  console.log('render Todos');

  return (
    <Container>
      <Decoration />
      <Header />
      <NewTodoForm />
      <List />
      <Count />
      <TodoList />
    </Container>
  );
};

export default Todos;
