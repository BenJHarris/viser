import React, { Suspense } from "react";
import { useUser, AuthCheck } from "reactfire";
import { SignInButton } from "../SignIn";
import SignOutButton from "../SignOut/SignOut";

const AccountPage = () => {
  return (
    <Suspense fallback="This is a actually a spinner">
      <AuthCheck fallback={<SignInButton />}>
        <AccountInfo />
        <SignOutButton />
      </AuthCheck>
    </Suspense>
  );
};

const AccountInfo = () => {
  const user = useUser();
  return user && <h1>{user.email}</h1>;
};

export default AccountPage;
