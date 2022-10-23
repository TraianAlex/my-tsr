import React from 'react';
import styled from 'styled-components';
import { dayOfYear, pause, randomColor } from './utils';
import { setSubTitle, useStore } from './TodoStore';

export const Header = () => {
  const title = useStore('title');
  const subTitle = useStore('subTitle');
  const count = useStore('count');

  const modifSubtitle = async () => {
    await pause(1000);
    setSubTitle('something else');
  };

  console.log('render Header');

  return (
    <HeaderStyle>
      <div>
        Title: {title} / Today is the {dayOfYear(new Date())} day
      </div>
      <div>
        <span
          className="span"
          style={{
            backgroundColor: `${randomColor()}`,
          }}
        >
          Colours: {randomColor()}
        </span>
        Count1: {count}
      </div>
      <div>
        SubTitle: {subTitle}
        <button onClick={modifSubtitle}>Modify Subtitle</button>
      </div>
      <hr />
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  width: 90%;
  margin: auto;

  span {
    margin-right: 10px;
  }

  button {
    border: 1px solid #50005a;
    padding: 0 0.2rem;
    cursor: pointer;
    margin-left: 0.3rem;
  }
`;
