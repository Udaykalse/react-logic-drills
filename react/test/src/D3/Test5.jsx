import { useEffect, useRef } from "react";

export default function Test5({ open, onClose }) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);

    return () => document.removeEventListener("keydown", handleKey);
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
        style={{ width: 300, margin: "100px auto", background: "white", padding: 20 }}
      >
        <h3>Modal</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
