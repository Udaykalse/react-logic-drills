import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  return (
    <>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={() => setList([...list, task])}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
