import { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello React</p>}
    </>
  );
}

export default Toggle;
