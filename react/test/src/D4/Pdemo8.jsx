import React, { useEffect, useState } from "react";

export default function Pdemo8() {
  const [key, setKey] = useState("");
  useEffect(() => {
    const handleKey = (e) => setKey(e.key);
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div>
      <h1>Add / Remove Event Listener (Keyboard)</h1>
      <h2>Keyboard Listner</h2>
      <p>Pressed Key : {key}</p>
    </div>
  );
}
