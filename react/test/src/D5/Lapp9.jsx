import React, { useState } from 'react'

export default function Lapp9() {
   const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p>Submitted: {submitted}</p>
    </form>
  );
}