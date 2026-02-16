import React, { useEffect, useRef, useState } from "react";

export default function Pdemo4() {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });
  return (
    <div>
      <h1>Click Outside to Close Modal</h1>
      <div style={{ padding: 20 }}>
        <button onClick={() => setOpen(true)}>Open</button>
        {open && (
          <div
            ref={boxRef}
            style={{
              marginTop: 20,
              padding: 20,
              width: 230,
              border: "2px solid black",
            }}
          >
            <h1>Modal</h1>
            <p>Click outside to close</p>
          </div>
        )}
      </div>
    </div>
  );
}
