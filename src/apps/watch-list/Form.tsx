import React, { useState } from 'react';
import styled from 'styled-components';
import { IState as Props } from './WatchList';

interface IProps {
  form: Props['form'];
  setForm: React.Dispatch<React.SetStateAction<Props['form']>>;
}

export const Form: React.FC<IProps> = ({ form, setForm }) => {
  const [input, setInput] = useState({
    name: '',
    rate: '',
    review: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (!input.name || !input.rate) {
      return;
    }
    setForm([
      ...form,
      {
        name: input.name,
        rate: parseInt(input.rate),
        review: input.review,
      },
    ]);
    setInput({
      name: '',
      rate: '',
      review: '',
    });
  };

  return (
    <FormStyled>
      <div className="first formDiv">
        <div>
          <h3>Enter movie name</h3>
          <input
            className="inputBox"
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <h3>Enter your rating</h3>
          <input
            className="inputBox rating"
            type="number"
            name="rate"
            value={input.rate}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div>
        <h3>Enter your review</h3>
        <textarea
          className="inputBox"
          name="review"
          value={input.review}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
      <button className="button" type="submit" onClick={(e) => handleClick(e)}>
        Submit
      </button>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  h3 {
    font-size: 1em;
    font-weight: bold;
  }

  .first {
    display: flex;
    justify-content: center;
  }

  .first div h3 {
    margin-top: 1rem;
  }

  .formDiv {
    margin: auto;
    padding-bottom: 1em;
  }

  .inputBox {
    border-radius: 3px;
    background-color: transparent;
    outline: 0;
    border: none;
    border-bottom: 1px solid rgb(202, 202, 202);
    padding: 10px;
    width: 200px;
    font-size: 18px;
    color: rgb(168, 168, 168) !important;
  }

  .inputBox:focus {
    border-bottom: 2px solid rgb(144, 255, 231);
  }

  .rating {
    margin-left: 30px;
  }

  .button {
    background-color: rgb(15, 123, 255);
    border-radius: 3px;
    width: 150px;
    padding: 10px;
    color: white;
    font-weight: 800;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
  }

  .button:hover {
    background-color: rgb(0, 111, 247);
  }
`;
