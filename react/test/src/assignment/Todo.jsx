import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const addTask = () => {
    if (input) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput("");
    }
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id} onClick={() => deleteTask(t.id)}>
            {t.text} <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
