import React, { useState } from "react";

export default function Demo5() {
  const [name, setName] = useState("");
  const [submitted, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    setName("");
  };

  return (
    <div>
      <h2>Controlled Form (Input Handling)</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Entre Name"
        />
        <button type="submit">Submit</button>
      </form>
      <p>you Typed : - {submitted}</p>
    </div>
  );
}
