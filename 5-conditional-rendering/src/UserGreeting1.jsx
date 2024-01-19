import PropTypes from "prop-types";

function UserGreeting1(props) {
  if (props.isLoggedIn) {
    return <h2 className="welcome-message">Welcome {props.username}</h2>;
  } else {
    return <h2 className="login-prompt">Please log in to continue</h2>;
  }
}

UserGreeting1.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting1.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting1;
