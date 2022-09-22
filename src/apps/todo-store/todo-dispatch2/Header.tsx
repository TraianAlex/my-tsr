import React from 'react';
import { useTest2 } from './TodoStore';
import { Decoration } from './Decoration';

export const Header = () => {
  const { countingDirection } = useTest2();

  console.log('render header');

  return (
    <div>
      Header {countingDirection()}
      <div>
        <Decoration />
      </div>
    </div>
  );
};
