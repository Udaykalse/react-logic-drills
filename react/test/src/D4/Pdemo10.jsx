import React, { useEffect, useRef, useState } from "react";

export default function Pdemo10() {
  const [count, setCount] = useState(0);
  const lastRun = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastRun.current < 800) return;
      lastRun.current = now;
      setCount((p) => p + 1);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div style={{ height: "200vh", padding: 20 }}>
      <h1>Throttle Scroll Event</h1>
      <h2>Throttl Scroll</h2>
      <p>Throttled Cound : - {count}</p>
      <p>Scroll Down To Rest</p>
    </div>
  );
}
