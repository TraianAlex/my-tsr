import React from 'react';
import { createStore } from '../../utils/store';
import TodoList from './TodoList';
import NewTodoForm from './NewTodo';
import { Container } from 'react-bootstrap';
import { Decoration } from './Decoration';
import { Count } from './Count';
import { List } from './List';

interface TodosState {
  id: string;
  text: string;
}

type State = {
  todos: TodosState[];
  decoration: string;
  count: number;
  user: string;
  list: string[];
};

export const todoStore = createStore({
  todos: [],
  decoration: 'xxxxxxxxxxxxxxxxxxxxxx',
  count: 0,
  user: '',
  list: [],
} as State);
const { getState, setState } = todoStore;

export const Todos: React.FC = () => {
  setState({ user: 'Alex' });

  const todoAddHandler = (text: string) => {
    setState({
      todos: [
        ...getState().todos,
        { id: Math.random().toString(), text: text },
      ],
      count: getState().count + 1,
    });
  };

  const createList = (text: string) => {
    setState({
      list: [...getState().list, text],
    });
  };

  const todoDeleteHandler = (todoId: string) => {
    setState({
      todos: [
        ...getState().todos.filter((todo: TodosState) => todo.id !== todoId),
      ],
      count: getState().count - 1,
    });
  };

  console.log('render Todos');

  return (
    <Container>
      <NewTodoForm onAddTodo={todoAddHandler} createList={createList} />
      <List />
      <Decoration />
      <Count />
      <TodoList onDeleteTodo={todoDeleteHandler} />
    </Container>
  );
};
