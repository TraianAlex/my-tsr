import React from 'react';
import { useSelector } from './store';
import { todoStore } from './TodoStore';

export const Decoration = () => {
  const decor = useSelector(todoStore, 'title');

  console.log('render Title');

  return (
    <div style={{ width: '90%', margin: 'auto'}}>
      <div>{decor}</div>
      <div>{}</div>
    </div>
  );
};