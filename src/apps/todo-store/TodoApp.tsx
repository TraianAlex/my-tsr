import React, { useState } from 'react';
import styled from 'styled-components';
import TodosStandard from './todo-standard/Todos';
import TodosSetState from './todo-setstate1/Todos';
import TodosSetState2 from './todo-setstate2/Todos';
import TodosSetState3 from './todo-setstate3/Todos';
import TodosDispatch from './todo-dispatch/Todos';
import TodosImmutable from './todo-immutable/Todos';

export const TodoApp = () => {
  const [page, setPage] = useState('standard');

  return (
    <>
      <MenuStyled>
        <ul>
          <li onClick={() => setPage('standard')}>Default</li>
          <li onClick={() => setPage('set-state')}>SetState</li>
          <li onClick={() => setPage('set-state2')}>SetState2</li>
          <li onClick={() => setPage('set-state3')}>SetState3</li>
          <li onClick={() => setPage('dispatch')}>Dispatch</li>
          <li onClick={() => setPage('immutable')}>Immutable</li>
        </ul>
      </MenuStyled>
      {page === 'standard' && <TodosStandard />}
      {page === 'set-state' && <TodosSetState />}
      {page === 'set-state2' && <TodosSetState2 />}
      {page === 'set-state3' && <TodosSetState3 />}
      {page === 'dispatch' && <TodosDispatch />}
      {page === 'immutable' && <TodosImmutable />}
    </>
  );
};

const MenuStyled = styled.nav`
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  li {
    margin: 0 5px 4px 0;
    padding: 0 5px;
    background-color: #50005a;
    color: white;
    cursor: pointer;
  }
`;
