import React from 'react';
import { createStore } from '../../utils/store';
import TodoList from './TodoList';
import NewTodoForm from './NewTodo';
import { Container } from 'react-bootstrap';
import { Decoration } from './Decoration';

interface TodoState {
  id: string;
  text: string;
}

export const todoStore = createStore({ todos: [], decoration: '12345567' });
const { getState, setState } = todoStore;

export const Todos: React.FC = () => {
  const todoAddHandler = (text: string) => {
    setState({
      ...getState(),
      todos: [
        ...getState().todos,
        { id: Math.random().toString(), text: text },
      ],
    });
  };

  const todoDeleteHandler = (todoId: string) => {
    setState({
      ...getState(),
      todos: [
        ...getState().todos.filter((todo: TodoState) => todo.id !== todoId),
      ],
    });
  };

  console.log('render Todos');

  return (
    <Container>
      <NewTodoForm onAddTodo={todoAddHandler} />
      <Decoration />
      <TodoList onDeleteTodo={todoDeleteHandler} />
    </Container>
  );
};
