import React from "react";

const NameList = () => {
  const names = ["Alice", "Bob", "Charlie", "David"];

  return (
    <ul>
        Heelo
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default NameList;
