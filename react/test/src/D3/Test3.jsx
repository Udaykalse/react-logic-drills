import React, { useEffect, useRef, useState } from "react";

export default function Test3() {
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setPage((p) => p + 1);
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h2>Page: {page}</h2>
      {Array.from({ length: page * 10 }).map((_, i) => (
        <div key={i}>Item {i + 1}</div>
      ))}
      <div ref={loaderRef} style={{ height: 30 }} />
    </div>
  );
}
