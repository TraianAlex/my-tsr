import React from 'react';
import { useTest2 } from './TodoStore';

export const Header = () => {
  const { count2 } = useTest2();

  console.log('render header');

  return <div>Header {count2}</div>;
};
