import React, { useState } from "react";

const filter = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [searchItem, setSearchTerm] = useState("");

  const filterItem = items.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase()),
  );
  return (
    <div>
      <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {filterItem.map((itM, idX) => (
          <li key={idX}>{itM}</li>
        ))}
      </ul>
    </div>
  );
};

export default filter;
