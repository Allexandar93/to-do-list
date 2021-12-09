import React, { useState } from "react";
import "../styles/ToDo.scss";
import ToDoForm from "./ToDoForm";
import { AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";

function ToDo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <AiOutlineCloseCircle
          className="icons__delete"
          onClick={() => removeTodo(todo.id)}
        />
        <AiOutlineEdit
          className="icons__edit"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
}

export default ToDo;
