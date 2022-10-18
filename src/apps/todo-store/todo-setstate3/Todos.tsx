import React, { useEffect, useRef } from 'react';
import TodoList from './TodoList';
import NewTodoForm from './NewTodo';
import { Container } from 'react-bootstrap';
import { Header } from './Header';
import { Count } from './Count';
import { List } from './List';
import { setSubTitle } from './TodoStore';
import { Footer } from './Footer';
import { toCamelCase } from './utils';

const initPageInfo = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const response = await fetch(url);
  const body = await response.json();
  setSubTitle(toCamelCase(body.title));
};

export const Todos: React.FC = () => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    initPageInfo();
    console.log('mounted');
  });

  console.log('render Todos');

  return (
    <Container>
      <Header />
      <NewTodoForm />
      <List />
      <Count />
      <TodoList />
      <Footer />
    </Container>
  );
};

export default Todos;
