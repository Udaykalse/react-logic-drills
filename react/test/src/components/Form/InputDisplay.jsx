import React, { useState } from "react";

export default function InputDisplay() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Typed: {text}</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
