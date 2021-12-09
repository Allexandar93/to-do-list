import React, { useState } from "react";
import "../styles/ToDoList.scss";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addTask = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTask = [todo, ...todos];

    setTodos(newTask);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeToDo = (id) => {
    let updatedToDos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedToDos);
  };

  return (
    <div className="todoList">
      <h1 className="todoList_h1">What should we do today?</h1>
      <ToDoForm onSubmit={addTask} />
      <ToDo
        todos={todos}
        completeToDo={completeToDo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default ToDoList;
