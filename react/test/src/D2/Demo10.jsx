import React, { useState } from "react";

export default function Demo10() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };
  return (
    <div>
      <h2>Todo List Demo 10</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, idX) => (
          <li key={idX}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
