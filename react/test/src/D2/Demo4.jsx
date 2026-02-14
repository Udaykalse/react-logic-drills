import React, { useEffect, useState } from "react";

export default function Demo4() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [count]);
  return (
    <div>
      <h1>UseEffect Dependency Example</h1>
      <button onClick={() => setCount(count + 1)}>
        Reload Data 
      </button>
      <span>({count})</span>
      {data.map((itM) => (
        <p key={itM.id}>{itM.title}</p>
      ))}
    </div>
  );
}
