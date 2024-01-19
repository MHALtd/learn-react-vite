import PropTypes from "prop-types";

function UserGreeting2(props) {
  const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;

  const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>;

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting2.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting2.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting2;
