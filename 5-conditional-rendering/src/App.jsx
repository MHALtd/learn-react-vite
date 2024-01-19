// conditional rendering= allows you to what gets rendered
//                        in your application based on certain conditions
//                        (show, hide, or change components)

// UserGreeting1 using if, else
// UserGreeting2 using ternary operator

import UserGreeting1 from "./UserGreeting1";
import UserGreeting2 from "./UserGreeting2";

function App() {
  return (
    <>
      <UserGreeting1 isLoggedIn={true} username="Mayonaka" />
      <UserGreeting2 isLoggedIn={true} username="MHALtd" />

      {/* UserGreeting with default props */}
      <UserGreeting1 isLoggedIn={true} />
      <UserGreeting2 isLoggedIn={false} />
    </>
  );
}

export default App;
