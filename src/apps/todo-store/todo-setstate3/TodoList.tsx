import React from 'react';
import { useSelector } from './store';
import { todoStore } from './TodoStore';
import styled from 'styled-components';

interface TodoListProps {
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ onDeleteTodo }) => {
  const todos = useSelector(todoStore, 'todos');

  console.log('render TodoList', todos);

  return (
    <ListStyled>
      {todos?.map((todo: any, i: number) => (
        <li key={todo.id}>
          <span>{todo.text} {i+1}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
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
