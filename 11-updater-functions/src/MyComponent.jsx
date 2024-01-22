// updater function = A function passed as an argument to useState() usually
//                    ex. setYear(y => y + 1)
//                    Allow for save updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practices to use updater functions

import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Takes the PENDING state to calculate NEXT state
    // React puts your updater function in a queue (waiting in line)
    // During the next render, it will call them in the same order
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>

      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
