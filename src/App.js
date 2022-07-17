import React, { useState, useEffect } from "react";

function App() {
const [count, setCount] = useState(0);
const [text, setText] = useState("");

  useEffect(() => {
    setTimeout(() => setCount(0),5000)

    
  } ,[]);

  console.log("Component rendering");

  return (
    <div>
  <button onClick={() => setCount((count) => count + 1)}>
    {count} times
  </button>
  <input
    type="text"
    placeholder="type here"
    value={text}
    onChange={(e) => setText(e.target.value)}
    />

  </div>
  )

}

export default App;
