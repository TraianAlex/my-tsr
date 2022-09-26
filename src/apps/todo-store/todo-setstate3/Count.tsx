import React from 'react';
import { useSelector } from './store';
import { todoStore } from './TodoStore';

export const Count = () => {
  const count = useSelector(todoStore, 'count');

  console.log('render Count', count);

  return <div style={{ width: '90%', margin: 'auto' }}>{count} rows</div>;
};
