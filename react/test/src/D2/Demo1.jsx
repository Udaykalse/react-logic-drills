import React, { useState } from "react";

export default function Demo1() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  };
  const deleteTodo = (idX) => {
    // setTodos(todos.filter)
    const copy = [...todos];
    copy.splice(idX, 1);
    setTodos(copy);
  };

  const toggleDone = (idX) => {
    const updated = [...todos];
    updated[idX].done = !updated[idX].done;
    setTodos(updated);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Entre task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, idX) => (
          <li key={idX}>
            <span
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {" "}
              {todo.text}
            </span>
            <button onClick={() => toggleDone(idX)}>Done</button>
            <button onClick={() => deleteTodo(idX)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
