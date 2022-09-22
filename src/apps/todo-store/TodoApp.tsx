import React, { useState } from 'react';
import styled from 'styled-components';
import TodosStandard from './todo-standard/Todos';
import TodosSetState from './todo-setstate1/Todos';
import TodosDispatch from './todo-dispatch2/Todos';
import TodosImmutable from './todo-immutable3/Todos';

export const TodoApp = () => {
  const [page, setPage] = useState('standard');

  return (
    <>
      <MenuStyled>
        <ul>
          <li onClick={() => setPage('standard')}>Default</li>
          <li onClick={() => setPage('set-state')}>SetState</li>
          <li onClick={() => setPage('dispatch')}>Dispatch</li>
          <li onClick={() => setPage('immutable')}>Immutable</li>
        </ul>
      </MenuStyled>
      {page === 'standard' && <TodosStandard />}
      {page === 'set-state' && <TodosSetState />}
      {page === 'dispatch' && <TodosDispatch />}
      {page === 'immutable' && <TodosImmutable />}
    </>
  );
};

const MenuStyled = styled.nav`
ul {
  display: flex;
  align-items: center;
}

li {
  margin: 0 5px;
  padding: 0 5px;
  background-color: #50005a;
  color: white;
  cursor: pointer;
}
`;
