import React from "react";
import { useFirebaseApp } from "reactfire";
import { Button } from "./style";

const signOut = firebase => {
  firebase.auth().signOut();
};

const SignOutButton = () => {
  const firebase = useFirebaseApp();
  return <Button onClick={() => signOut(firebase)}>Sign Out</Button>;
};

export default SignOutButton;
