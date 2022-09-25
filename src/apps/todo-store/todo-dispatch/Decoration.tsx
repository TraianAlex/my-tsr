import React, { memo } from 'react';
import { useSelector, useStoreRaw } from './store';
import { todoStore, useTest } from './TodoStore';

export const Decoration = memo(() => {
  const title = useSelector(todoStore, 'title');

  const { todos } = useStoreRaw(todoStore);

  const { userStatus } = useTest();

  console.log('render title');

  return (
    <>
      <div>
        {title} {userStatus()}
      </div>
      <div>{JSON.stringify(todos)}</div>
    </>
  );
});
