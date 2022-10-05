import React from 'react';
import { dayOfYear, pause, randomColor } from './utils';
import { setSubTitle, useSelector } from './TodoStore';

export const Header = () => {
  const title = useSelector('title');
  const subTitle = useSelector('subTitle');
  const count = useSelector('count');

  const modifSubtitle = async () => {
    await pause(1000);
    setSubTitle('something else');
  };

  console.log('render Header');

  return (
    <div style={{ width: '90%', margin: 'auto' }}>
      <div>
        {title} / Today is the {dayOfYear(new Date())} day
      </div>
      <div style={{ backgroundColor: `${randomColor()}` }}>
        Colours {randomColor()}
      </div>
      <div>
        SubTitle: {subTitle} / Count1: {count}
      </div>
      <button
        style={{ border: '1px solid black', padding: ' 0 5px' }}
        onClick={modifSubtitle}
      >
        Modify Subtitle
      </button>
      <hr />
    </div>
  );
};
