import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});

export default function Test9() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Inc</button>
      <Child onClick={handleClick} />
    </div>
  );
}
