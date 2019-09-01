import React, { Suspense } from "react";
import { withRouter } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "firebaseui";
import { useFirebaseApp, useUser } from "reactfire";
import { HOME } from "../../constants/routes";

const SignInPage = ({ history }) => {
  const user = useUser();
  if (user) {
    history.push(HOME);
  }
  const firebase = useFirebaseApp();
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    credentialHelper: auth.CredentialHelper.NONE,
    callbacks: {
      signInSuccessWithAuthResult: () => history.push(HOME)
    }
  };

  return (
    <div>
      <h1>SignIn</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

const suspenseWrapper = props => (
  <Suspense fallback="Loading...">
    <SignInPage {...props} />
  </Suspense>
);

export default withRouter(suspenseWrapper);
