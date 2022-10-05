import React, { useEffect } from 'react';
import { useSelector } from './TodoStore';

export const List = () => {
  const [list, setList] = useSelector('list');

  useEffect(() => {
    setList(() => ['initial list']);
  }, [setList]);

  console.log('render List');

  return (
    <div style={{ width: '90%', margin: 'auto' }}>
      {list?.map((item: string, i: number) => (
        <span key={Math.random()}>
          {item} {i + 1} /{' '}
        </span>
      ))}
    </div>
  );
};
