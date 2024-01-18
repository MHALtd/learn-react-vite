// STYLING REACT COMPONENT WITH CSS
//
// not include external frameworks or preprocessors
//
// Button1 = EXTERNAL (from /src/index.css)
// Button2 = MODULES (from /src/Button/Button.module.css)
// Button3 = INLINE (from file itself)

import Button1 from "./Button/Button1";
import Button2 from "./Button/Button2";
import Button3 from "./Button/Button3";

const App = () => {
  return (
    <>
      <Button1 />
      <Button2 />
      <Button3 />
    </>
  );
};

export default App;
