import React, { useState, useEffect, useRef } from "react";

function MyComponent() {
  // this is when you use useState() and it will cause re-renders the component:
  // const [input1Focus, setInput1Focus] = useState(false);
  // const [input2Focus, setInput2Focus] = useState(false);
  // const [input3Focus, setInput3Focus] = useState(false);

  //   use useRef for avoiding re-renders the component
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "green";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "green";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "green";
  }

  return (
    <div>
      <div>
        <button onClick={handleClick1}>Click Me1!</button>
        <input type="text" ref={inputRef1} />
      </div>
      <div>
        <button onClick={handleClick2}>Click Me2!</button>
        <input type="text" ref={inputRef2} />
      </div>
      <div>
        <button onClick={handleClick3}>Click Me3!</button>
        <input type="text" ref={inputRef3} />
      </div>
    </div>
  );
}

export default MyComponent;
