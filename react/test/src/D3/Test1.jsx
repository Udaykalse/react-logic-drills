import React, { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

// import React from "react";

export default function Test1() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);
  useEffect(() => {
    if (!debouncedText) return;
    console.log("Call API :- ", debouncedText);
  }, [debouncedText]);

  return (
    <div>
      <h2>Debounced Search Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search....."
      />
    </div>
  );
}
