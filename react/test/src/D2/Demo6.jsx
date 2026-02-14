import React, { useState } from "react";

export default function Demo6() {
  const items = ["Apple", "Banana", "Orange", "Mango"];
  const [search, setSearch] = useState("");
  const filteredItem = items.filter((itM) =>
    itM.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <h3>Search Filter in React</h3>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredItem.map((itM, idX) => (
          <li key={idX}>{itM}</li>
        ))}
      </ul>
    </div>
  );
}
