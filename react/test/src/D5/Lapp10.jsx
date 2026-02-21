import React from 'react'

export default function Lapp10() {
  const users = ["Uday", "Rahul", "Amit"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
