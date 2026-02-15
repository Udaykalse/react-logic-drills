import React, { useEffect, useRef } from "react";

export default function Test2({ open, onClose }) {
  const boxRef = useRef(null);
  useEffect(() => {
    console.log("useEffect ran, open =", open);

    if (!open) return;

    console.log("Modal opened, adding listener");

    const handleKey = (e) => {
      console.log("KEY:", e.key);
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      console.log("cleanup, removing listener");
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)" }}
    >
      <div
        ref={boxRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 300,
          margin: "100px auto",
          background: "white",
          padding: 20,
        }}
      >
        <h3>Modal that closes on ESC</h3>
        <button onClick={onClose}>Close</button>
      </div>
      <h1>Model</h1>
    </div>
  );
}
