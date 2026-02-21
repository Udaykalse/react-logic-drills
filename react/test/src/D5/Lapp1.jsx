import React, { useState } from 'react'

export default function Lapp1() {
 useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <h2>Check console</h2>;
}