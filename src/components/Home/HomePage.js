import React, { Suspense } from "react";
import { AuthCheck } from "reactfire";
import { SignInButton } from "../SignIn";

const HomePage = () => (
  <AuthCheck fallback={<SignInButton />}>
    <div>
      <h1>Home</h1>
      <p>The Home page is accessible by every signed in user</p>
    </div>
  </AuthCheck>
);

const SuspenseWrapper = props => (
  <Suspense fallback={<p>Loading...</p>}>
    <HomePage {...props} />
  </Suspense>
);

export default SuspenseWrapper;
