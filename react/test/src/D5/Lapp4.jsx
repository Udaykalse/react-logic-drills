import React, { useState } from 'react'

export default function Lapp4() {
  const [search, setSearch] = useState("");
  const users = ["Uday", "Rahul", "Amit"];

  const filtered = users.filter(user =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}