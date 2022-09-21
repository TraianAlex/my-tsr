import React from 'react';
import { useSelector } from './store';
import { todoStore } from './TodoStore';

export const Decoration = () => {
  const title = useSelector(todoStore, 'title');

  //const { title, todos } = useStoreRaw(todoStore);

  console.log('render title');

  return (
    <>
      <div>{title}</div>
      <div>{}</div>
    </>
  );
};
