import React, { Suspense } from "react";
import {
  SIGN_IN,
  LANDING,
  HOME,
  ACCOUNT,
  FLASHCARDS
} from "../../constants/routes";
import { useUser } from "reactfire";
import { Link, Nav, NavHeader, NavButton, NavSection } from "./style";

function Navigation() {
  const user = useUser();

  return (
    <Nav>
      <NavHeader>
        <NavSection>
          <NavButton as={Link} to={user ? HOME : LANDING} tabIndex={0}>
            Viser
          </NavButton>
          {user && (
            <NavButton as={Link} to={FLASHCARDS} tabIndex={0}>
              Flashcards
            </NavButton>
          )}
        </NavSection>
        <NavSection>
          {user ? (
            <NavButton as={Link} to={ACCOUNT} tabIndex={0}>
              {user.displayName}
            </NavButton>
          ) : (
            <NavButton as={Link} to={SIGN_IN} tabIndex={0}>
              Sign In
            </NavButton>
          )}
        </NavSection>
      </NavHeader>
    </Nav>
  );
}

function SuspenseWrapper() {
  return (
    <Suspense fallback={"loading.."}>
      <Navigation />
    </Suspense>
  );
}

export default SuspenseWrapper;
