function Button() {
  // BUTTON 1
  const handleClick = () => {
    console.log("OUCH!");
  };

  //   BUTTON 2 FUNCTION
  const handleClick2 = (name) => {
    console.log(`${name} stop clicking me`);
  };

  //   BUTTON 3 FUNCTION
  let count = 0;
  const handleClick3 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name}, you clicked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  };

  //   BUTTON 4 FUNCTION
  const handleClick4 = (e) => (e.target.textContent = "OUCH!");

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      {/* use arrow function to prevent call the function right away if you have param on your function */}
      <button onClick={() => handleClick2("Mayo")}>Click Me</button>
      <button onClick={() => handleClick3("Mayo")}>Click Me</button>
      <button onDoubleClick={(e) => handleClick4(e)}>Click Me</button>
    </>
  );
}

export default Button;
