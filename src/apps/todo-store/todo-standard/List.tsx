import React from 'react';

export const List = ({ list }: any) => {
  console.log('render List');

  return (
    <>
      {list?.map((item: string) => (
        <span key={Math.random()}>{item} / </span>
      ))}
    </>
  );
};
