import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText === "") {
      alert("Enter text");
      return;
    }
    props.onAddTodo(enteredText);
    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler} className={classes.form}>
      <div className={classes.formControl}>
        <label htmlFor="todo-text" className={classes.label}>
          Todo
        </label>
        <input
          type="text"
          id="todo-text"
          ref={textInputRef}
          className={classes.input}
        />
      </div>
      <button type="submit" className={classes.button}>
        ADD TODO
      </button>
    </form>
  );
};

export default NewTodo;
