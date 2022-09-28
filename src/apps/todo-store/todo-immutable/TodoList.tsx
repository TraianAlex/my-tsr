import React from 'react';
import { useSelector } from './store';
import { DELETE_TODO, SET_COUNT, todoStore } from './TodoStore';
import styled from 'styled-components';

const { dispatch } = todoStore;

const TodoList: React.FC = () => {
  const todos = useSelector(todoStore, 'todos').toJS();
  //const todos = useStore(todoStore, state => state).get('todos').toJS();

  const todoDeleteHandler = (todoId: string) => {
    dispatch({ type: DELETE_TODO, value: todoId });
    dispatch({ type: SET_COUNT, value: -1 });
  };

  console.log('render TodoList');

  return (
    <ListStyled>
      {todos?.map((todo: any) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={todoDeleteHandler.bind(null, todo.id)}>
            DELETE
          </button>
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
