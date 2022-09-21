import React from 'react';
import { useSelector } from './store';
import { todoStore } from './TodoStore';

export const Decoration = () => {
  const title = useSelector(todoStore, 'title');

  //const title = useStoreRaw(todoStore).get('title');
  //const state = useStoreRaw(todoStore);
  //state.get('todos').toJS() state.get('title')

  console.log('render Title');

  return (
    <>
      <div>{title}</div>
      <div>{}</div>
    </>
  );
};
