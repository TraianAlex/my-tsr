import React from 'react';
import { useSelector } from '../../utils/store';
import { todoStore } from './Todos';

export const Decoration = () => {
  const decor = useSelector(todoStore, 'decoration');

  console.log('render Decoration');

  return (
    <>
      <div>{decor}</div>
      <div>{}</div>
    </>
  );
};
