import React from 'react';
import { useSelector } from './TodoStore';

export const Count = () => {
  const count = useSelector('count');

  console.log('render Count', count);

  return <div style={{ width: '90%', margin: 'auto' }}>{count} rows</div>;
};
