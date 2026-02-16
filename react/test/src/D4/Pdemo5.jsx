import React, { useEffect, useState } from "react";

export default function Pdemo5() {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSec((p) => p + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <h1>Timer with Cleanup (Interval)</h1>
      <h3>Timer</h3>
      <p>Second :- {sec}</p>
    </div>
  );
}
