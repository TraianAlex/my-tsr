import React from 'react';
import { todoStore, TodosState } from './TodoStore';
import TodoList from './TodoList';
import NewTodoForm from './NewTodo';
import { Container } from 'react-bootstrap';
import { Decoration } from './Decoration';
import { Count } from './Count';
import { List } from './List';

const { getState, setState } = todoStore;

setState({ user: 'Alex' });

const todoAddHandler = (text: string) => {
  setState({
    todos: [...getState().todos, { id: Math.random().toString(), text: text }],
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
