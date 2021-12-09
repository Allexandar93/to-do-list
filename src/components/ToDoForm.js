import React, { useState, useEffect, useRef } from "react";
import "../styles/ToDoForm.scss";

function ToDoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="toDoForm" onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your task"
            value={input}
            name="text"
            className="toDoForm__input"
            onChange={changeHandler}
            ref={inputRef}
          />
          <button className="toDoFrom__button">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a task"
            value={input}
            name="text"
            className="toDoForm__input"
            onChange={changeHandler}
            ref={inputRef}
          />
          <button className="toDoFrom__button">Add task</button>
        </>
      )}
    </form>
  );
}

export default ToDoForm;
