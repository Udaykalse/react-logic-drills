import React, { useState } from "react";

export default function Pdemo3() {
  const [msg, setMsg] = useState("");
  const copy = async () => {
    await navigator.clipboard.writeText("Hello ReactJS!");
    setMsg("Copied!");
    setTimeout(() => setMsg(""), 1200);
  };
  return (
    <div>
      <h1>Copy to Clipboard</h1>
      <button onClick={copy}>Copy</button>
      <p>{msg}</p>
    </div>
  );
}
