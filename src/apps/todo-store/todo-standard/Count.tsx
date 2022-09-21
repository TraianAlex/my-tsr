import React from 'react';

export const Count = ({ count }: any) => {
  console.log('render Count', count);

  return <div>{count} rows</div>;
};
