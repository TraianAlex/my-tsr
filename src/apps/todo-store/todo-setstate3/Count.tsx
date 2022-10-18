import React from 'react';
import { useStore } from './TodoStore';

export const Count = () => {
  const count = useStore('count');

  console.log('render Count', count);

  return <div style={{ width: '90%', margin: 'auto' }}>{count} rows</div>;
};
