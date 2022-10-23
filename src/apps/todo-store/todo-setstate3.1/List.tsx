import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStore } from './TodoStore';

export const List = () => {
  const [list, setList] = useStore('list');

  useEffect(() => {
    setList(() => ['initial list']);
  }, [setList]);

  console.log('render List');

  return (
    <ListStyled>
      <hr />
      {list?.map((item: string, i: number) => (
        <span key={Math.random()}>
          {item} {i + 1} /{' '}
        </span>
      ))}
    </ListStyled>
  );
};

const ListStyled = styled.div`
  width: 90%;
  margin: auto;
`;
