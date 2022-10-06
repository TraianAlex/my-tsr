import React from 'react';
import { useSelector } from './store';
import { todoStore } from './TodoStore';
import styled from 'styled-components';
import { todoDeleteHandler } from './Todos';

const TodoList: React.FC = () => {
  const todos = useSelector(todoStore, 'todos');

  console.log('render TodoList', todos);

  return (
    <ListStyled>
      {todos?.map((todo: any) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={todoDeleteHandler.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ListStyled>
  );
};

export default TodoList;

const ListStyled = styled.ul`
  list-style: none;
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 0;

  li {
    margin: 1rem 0;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
