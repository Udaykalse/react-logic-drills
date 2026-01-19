import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <button onClick={() => setcount(count + 1)}>Plus</button>
      <span>{count}</span>
      <button onClick={() => setcount(count - 1)}>Minus</button>
    </div>
  );
}

export default Counter;
