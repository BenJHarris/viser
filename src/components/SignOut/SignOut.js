import React from "react";
import { useFirebaseApp } from "reactfire";

const signOut = firebase => {
  firebase.auth().signOut();
};

const SignOutButton = () => {
  const firebase = useFirebaseApp();
  return (
    <button type="button" onClick={() => signOut(firebase)}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
