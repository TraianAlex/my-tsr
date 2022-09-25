import React from 'react';
import { useSelector } from './store';
import { todoStore } from './TodoStore';

export const List = () => {
  const list = useSelector(todoStore, 'list');
  //const list = useStoreRaw(todoStore).get('list').toJS();

  console.log('render List');

  return (
    <>
      {list?.map((item: string) => (
        <span key={Math.random()}>{item} / </span>
      ))}
    </>
  );
};
