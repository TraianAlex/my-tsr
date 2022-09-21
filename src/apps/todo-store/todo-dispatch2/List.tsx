import React from 'react';
import { useSelector } from './store';
import { todoStore } from './TodoStore';

export const List = () => {
  const list = useSelector(todoStore, 'list');

  console.log('render List', list);

  return (
    <>
      {list?.map((item: string) => (
        <span key={Math.random()}>{item} / </span>
      ))}
    </>
  );
};
