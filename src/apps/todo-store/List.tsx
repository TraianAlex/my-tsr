import React from 'react'
import { useSelector } from '../../utils/store';
import { todoStore } from './Todos';

export const List = () => {
  const list = useSelector(todoStore, 'list');

  console.log('render List');

  return list.map((item: string) => (
    <span key={Math.random()}>{item} / </span>
  ));
}
