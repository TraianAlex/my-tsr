import React, { useState } from 'react';
import styled from 'styled-components';
import { IState as Props } from './ListInvited';

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
  people: Props['people'];
}

const AddToList: React.FC<IProps> = ({ setPeople, people }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.name || !input.age) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        img: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: '',
      age: '',
      img: '',
      note: '',
    });
  };

  return (
    <AddToListStyled>
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="name"
        value={input.name}
        placeholder="Name"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="age"
        value={input.age}
        placeholder="Age"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="img"
        value={input.img}
        placeholder="Image Url"
      />
      <textarea
        onChange={handleChange}
        className="AddToList-input"
        name="note"
        value={input.note}
        placeholder="Note"
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add to List
      </button>
    </AddToListStyled>
  );
};

export default AddToList;

const AddToListStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  margin: 5rem auto;

  .AddToList-input {
    margin: 0.3rem 0rem;
    padding: 0.5rem;
    font-size: 1rem;
  }

  .AddToList-btn {
    padding: 0.5rem;
    cursor: pointer;
    background-color: #0b5468;
    font-weight: 700;
    color: white;
    border: none;
  }
`;
