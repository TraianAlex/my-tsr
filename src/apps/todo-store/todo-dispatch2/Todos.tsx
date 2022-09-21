import React from 'react';
import {
  ADD_LIST,
  ADD_TODO,
  DELETE_TODO,
  SET_USER,
  todoStore,
} from './TodoStore';
import TodoList from './TodoList';
import NewTodoForm from './NewTodo';
import { Container } from 'react-bootstrap';
import { Decoration } from './Decoration';
import { Count } from './Count';
import { List } from './List';
import { Header } from './Header';

const { dispatch } = todoStore;

const Todos: React.FC = () => {
  dispatch({ type: SET_USER, value: 'Alex' });

  const todoAddHandler = (text: string) => {
    dispatch({ type: ADD_TODO, value: text });
  };

  const createList = (text: string) => {
    dispatch({ type: ADD_LIST, value: text });
  };

  const todoDeleteHandler = (todoId: string) => {
    dispatch({ type: DELETE_TODO, value: todoId });
  };

  console.log('render Todos');

  return (
    <Container>
      <Decoration />
      <Header />
      <NewTodoForm onAddTodo={todoAddHandler} createList={createList} />
      <List />
      <Count />
      <TodoList onDeleteTodo={todoDeleteHandler} />
    </Container>
  );
};

export default Todos;
