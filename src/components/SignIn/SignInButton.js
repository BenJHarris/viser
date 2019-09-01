import React from "react";
import { withRouter } from "react-router-dom";

const SignInButton = ({ history }) => {
  const onClick = event => {
    event.preventDefault();
    history.push("/signin");
  };

  return <button onClick={onClick}>Sign in</button>;
};

export default withRouter(SignInButton);
