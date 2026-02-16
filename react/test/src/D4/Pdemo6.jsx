import React, { useEffect, useState } from "react";

export default function Pdemo6() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1",
          { signal: controller.signal },
        );
        const json = await res.json();
        setData(json);
      } catch (e) {
        if (e.name === "AbortError") console.log("Request Aborted!");
      }
    };
    load();
    return () => controller.abort();
  }, []);
  return (
    <div>
      <h2>Abort Fetch</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
