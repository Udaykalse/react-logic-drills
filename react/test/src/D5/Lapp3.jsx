import React, { useState } from 'react'

export default function Lapp3() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Child sendData={setMessage} />
      <p>{message}</p>
    </div>
  );
}

function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hello from Child")}>
      Send Data
    </button>
  );
}