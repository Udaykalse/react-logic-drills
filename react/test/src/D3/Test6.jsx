import { useState } from "react";

export default function Test6({ tabs, value, onChange }) {
  const [internal, setInternal] = useState(0);

  const active = value !== undefined ? value : internal;

  const setActive = (i) => {
    if (onChange) onChange(i);
    else setInternal(i);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 10 }}>
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            style={{ fontWeight: active === i ? "bold" : "normal" }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 10 }}>{tabs[active].content}</div>
    </div>
  );
}
