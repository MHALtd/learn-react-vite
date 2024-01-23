import React, { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("cyan");

  //  you can update your page title while the function run
  //  you have to add empty array when you just need to useEffect at once
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "cyan" ? "red" : "cyan"));
  }

  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default MyComponent;
