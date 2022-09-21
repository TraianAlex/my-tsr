import React from 'react';
import { useSelector } from './store';
import { todoStore, useTest } from './TodoStore';

export const Decoration = () => {
  const title = useSelector(todoStore, 'title');

  //const { title, todos } = useStoreRaw(todoStore);

  const { user } = useTest();

  console.log('render title');

  return (
    <>
      <div>
        {title} {user}
      </div>
      <div>{}</div>
    </>
  );
};
