import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from './Form';
import { List } from './List';

export interface IState {
  form: {
    name: string;
    rate: number;
    review?: string;
  }[];
}

export const WatchList = () => {
  const [form, setForm] = useState<IState['form']>([
    {
      name: 'Spirited Away',
      rate: 9,
      review: 'Beautifully written',
    },
    {
      name: 'Mean Girls',
      rate: 7.5,
      review: "Classic chick flick for girl's night out",
    },
  ]);

  return (
    <WatchStyled>
      <h1 className="title">My Watch List</h1>
      <div className="form-card">
        <List form={form} />
        <Form form={form} setForm={setForm} />
      </div>
    </WatchStyled>
  );
};

const WatchStyled = styled.div`
  text-align: center;
  display: grid;
  justify-content: center;
  min-height: 85vh;

  background-image: url('images/image.png');
  background-color: #0f0f0f;
  background-size: 1600px 800px;

  .title {
    font-family: 'Zilla Slab', serif;
    font-size: 55px;
    color: white;
  }

  .form-card {
    color: rgb(168, 168, 168) !important;
    margin: auto;
    border: 1px solid rgb(26, 26, 26);
    height: fit-content;
    //max-width: 700px;
    background-color: rgb(32, 32, 32);
    padding: 30px;
    margin-top: 10px;
    box-shadow: -3px 1px 11px 4px rgba(0, 0, 0, 0.08);
    -webkit-box-shadow: -3px 1px 11px 4px rgba(0, 0, 0, 0.08);
    -moz-box-shadow: -3px 1px 11px 4px rgba(0, 0, 0, 0.08);
  }
`;
