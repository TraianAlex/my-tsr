import React from 'react';
import { useTest2 } from './TodoStore';

export const Header = () => {
  const { testFunction1 } = useTest2();

  console.log('render header', testFunction1());

  return <div>Header {testFunction1()}</div>;
};
