import { useState } from "react";

function LiveInput() {
  const [text, setText] = useState("");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </>
  );
}

export default LiveInput;
