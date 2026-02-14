import React, { useState } from "react";

export default function Demo7() {
  const [tasks, setTasks] = useState([
    "React",
    "Javascript",
    "CSS",
    "Linux",
    "Docker",
    "Git",
    "Python",
  ]);
  const deleteTask = (idX) => {
    const newTasks = tasks.filter((_, i) => i !== idX);
    setTasks(newTasks);
  };
  return (
    <div>
      <h2>Delete Item from List React</h2>
      <ul>
        {tasks.map((task, idX) => (
          <li>
            {task} <button onClick={() => deleteTask(idX)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
