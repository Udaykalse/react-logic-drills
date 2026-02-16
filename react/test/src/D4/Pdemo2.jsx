import React, { useMemo, useState } from "react";

export default function Pdemo2() {
  const [q, setQ] = useState("");
  const list = ["React", "Redux", "Docker", "Linux", "Node", "TypeScript"];
  const filtered = useMemo(() => {
    return list.filter((x) => x.toLowerCase().includes(q.toLowerCase()));
  }, [q]);

  return (
    <div>
      <h1>Search Filter (No API)</h1>
      <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
      {filtered.map((x) => (
        <p key={x}>{x}</p>
      ))}
    </div>
  );
}
