import React from 'react';
import styled from 'styled-components';
import { Count2 } from './Count2';
import { useStore } from './TodoStore';
import { clearCookies, randomString } from './utils';

export const Footer = () => {
  const [render, setRender] = useStore('render');

  console.log('render Footer, random string');

  return (
    <FooterStyled>
      <hr />
      <Count2 /> Random string: {randomString()}
      <button onClick={() => setRender(!render)}>Render</button>
      <button onClick={() => clearCookies()}>Clear Cookies</button>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  width: 90%;
  margin: auto;

  button {
    border: 1px solid #50005a;
    padding: 0 0.2rem;
    cursor: pointer;
    margin-left: 0.3rem;
  }
`;
