import React, { useState } from 'react'

export default function Lapp7() {
   const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello React Developer!</p>}
    </div>
  );

}
