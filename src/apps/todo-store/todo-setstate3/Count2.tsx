import React, { memo } from 'react';
import { useSelector } from './TodoStore';

export const Count2 = memo(() => {
  const count2 = useSelector('count2');

  console.log('render Count2', count2);

  return <div style={{ width: '90%', margin: 'auto' }}>Count2: {count2}</div>;
});
