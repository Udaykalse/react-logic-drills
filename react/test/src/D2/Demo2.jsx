import { useState } from "react";

export default function Demo2() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <h2>Hello React</h2>

      <style>
        {`
          .dark {
            background: black;
            color: white;
            height: 100vh;
            padding: 20px;
          }
        `}
      </style>
    </div>
  );
}
