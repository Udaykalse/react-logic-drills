import React, { useEffect, useState } from "react";

export default function Pdemo9() {
  const [text, setText] = useState("");
  const [debounced, setDebounced] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(text);
    }, 400);
    return () => clearTimeout(timer);
  }, [text]);
  useEffect(() => {
    if (!debounced) return;
    console.log("API Call for ,", debounced);
  }, [debounced]);
  return (
    <div>
      <h1>Debounce Search Input (API call simulation)</h1>
      <h2>Debounce Search</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Debounced: {debounced}</p>
    </div>
  );
}
