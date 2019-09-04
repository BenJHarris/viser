import React from "react";
import { withRouter } from "react-router-dom";
import { Button, FullWidthImage, SignInContainer } from "./style";

const SignInButton = ({ history }) => {
  const onClick = event => {
    event.preventDefault();
    history.push("/signin");
  };

  return (
    <SignInContainer>
      <FullWidthImage src="/sign_in.svg" />
      <Button onClick={onClick}>Sign In</Button>
    </SignInContainer>
  );
};

export default withRouter(SignInButton);
