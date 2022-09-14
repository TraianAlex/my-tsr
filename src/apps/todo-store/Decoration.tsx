import React from 'react';
import { useStoreItem } from '../../utils/store';
import { todoStore } from './Todos';

export const Decoration = () => {
  const decor = useStoreItem(todoStore, 'decoration');

  console.log('render Decoration');

  return (
    <>
      <div>{decor}</div>
      <div>{}</div>
    </>
  );
};
