import React, { useState } from 'react';
import styled from 'styled-components';
import TodosStandard from './todo-standard/Todos';
import TodosSetState from './todo-setstate1/Todos';
import TodosSetState2 from './todo-setstate2/Todos';
import TodosSetState3 from './todo-setstate3/Todos';
import TodosSetState31 from './todo-setstate3.1/Todos';
import TodosDispatch from './todo-dispatch/Todos';
import TodosImmutable from './todo-immutable/Todos';

const PageView: any = {
  STANDARD: TodosStandard,
  SETSTATE: TodosSetState,
  SETSTATE2: TodosSetState2,
  SETSTATE3: TodosSetState3,
  SETSTATE31: TodosSetState31,
  DISPATCH: TodosDispatch,
  IMMUTABLE: TodosImmutable,
};

export const TodoApp = () => {
  const [page, setPage] = useState('STANDARD');

  const SpecificView = PageView[page];

  return (
    <>
      <MenuStyled>
        <ul>
          <li onClick={() => setPage('STANDARD')}>Default</li>
          <li onClick={() => setPage('SETSTATE')}>SetState</li>
          <li onClick={() => setPage('SETSTATE2')}>SetState2</li>
          <li onClick={() => setPage('SETSTATE3')}>SetState3</li>
          <li onClick={() => setPage('SETSTATE31')}>SetState3.1</li>
          <li onClick={() => setPage('DISPATCH')}>Dispatch</li>
          <li onClick={() => setPage('IMMUTABLE')}>Immutable</li>
        </ul>
      </MenuStyled>
      <SpecificView />
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
