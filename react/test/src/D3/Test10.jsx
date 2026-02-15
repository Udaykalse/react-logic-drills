import { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

export default function Test() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    if (!debouncedText) return;
    console.log("Call API:", debouncedText);
  }, [debouncedText]);

  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Search..."
    />
  );
}
