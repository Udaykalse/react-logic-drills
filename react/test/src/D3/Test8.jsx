import { useMemo, useState } from "react";

export default function Test8({ items, itemHeight = 35, height = 300 }) {
  const [scrollTop, setScrollTop] = useState(0);

  const totalHeight = items.length * itemHeight;

  const startIndex = Math.floor(scrollTop / itemHeight);
  const visibleCount = Math.ceil(height / itemHeight);

  const visibleItems = useMemo(() => {
    return items.slice(startIndex, startIndex + visibleCount + 5);
  }, [items, startIndex, visibleCount]);

  return (
    <div
      style={{ height, overflowY: "auto", border: "1px solid gray" }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {visibleItems.map((item, i) => {
          const index = startIndex + i;
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: index * itemHeight,
                height: itemHeight,
                left: 0,
                right: 0,
                borderBottom: "1px solid #ddd",
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
