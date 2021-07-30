import React, { useRef } from 'react';
import styled from 'styled-components';

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText === '') {
      alert('Enter text');
      return;
    }
    props.onAddTodo(enteredText);
    textInputRef.current!.value = '';
  };

  return (
    <FormStyled onSubmit={todoSubmitHandler}>
      <div className="formControl">
        <label htmlFor="todo-text" className="label">
          Todo
        </label>
        <input
          type="text"
          id="todo-text"
          ref={textInputRef}
          className="input"
        />
      </div>
      <button type="submit" className="button">
        ADD TODO
      </button>
    </FormStyled>
  );
};

export default NewTodo;

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;

  .formControl {
    display: flex;
    align-items: center;
    flex: 1;
  }

  label,
  input {
    margin-right: 0.5rem;
  }

  label {
    font-weight: bold;
  }

  input {
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.25rem;
  }

  input:focus {
    outline: none;
    border-color: #50005a;
  }

  button {
    background: #50005a;
    border: 1px solid #50005a;
    color: white;
    padding: 0.3rem 1rem;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active {
    background: #6a0a77;
    border-color: #6a0a77;
  }
`;
