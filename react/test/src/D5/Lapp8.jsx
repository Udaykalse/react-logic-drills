import React, { useState } from 'react'

export default function Lapp8() {
  const [name, setName] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>You typed: {name}</p>
    </div>
  );
}
