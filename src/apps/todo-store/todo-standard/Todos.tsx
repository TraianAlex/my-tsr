import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import NewTodoForm from './NewTodo';
import { Container } from 'react-bootstrap';
import { Decoration } from './Decoration';
import { Count } from './Count';
import { List } from './List';

interface TodoState {
  id: string;
  text: string;
}

const Todos: React.FC = () => {
  const [title] = useState<string>('Default state');
  const [todos, setTodos] = useState<TodoState[]>([]);
  const [list, setList] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<string | undefined>();

  useEffect(() => {
    setUser('Alex');
  }, []);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
    setCount(count + 1);
  };

  const createList = (text: string) => {
    setList([...list, text]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
    setCount(count - 1);
  };

  console.log('render Todos');

  return (
    <Container>
      <Decoration title={title} />
      <NewTodoForm
        onAddTodo={todoAddHandler}
        createList={createList}
        user={user}
      />
      <List list={list} />
      <Count count={count} />
      <TodoList todos={todos} onDeleteTodo={todoDeleteHandler} />
    </Container>
  );
};

export default Todos;
