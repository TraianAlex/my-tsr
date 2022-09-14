import React from 'react'
import { useSelector } from '../../utils/store';
import { todoStore } from './Todos';

export const Count = () => {
  const count = useSelector(todoStore, 'count');

  console.log('render Count');

  return (
    <div>{count} rows</div>
  )
}

