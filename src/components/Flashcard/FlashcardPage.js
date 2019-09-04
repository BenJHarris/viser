import React, { Suspense } from "react";
import FlashcardCreate from "./FlashcardCreate";
import { useFirestoreCollection, useFirebaseApp, AuthCheck } from "reactfire";
import Flashcard from "./Flashcard";
import { SignInButton } from "../SignIn";
import { Header } from "./style";

function FlashcardPage() {
  const firebaseApp = useFirebaseApp();
  const ref = firebaseApp.firestore().collection("flashcards");

  const queryRef = ref.where(
    "author",
    "==",
    firebaseApp.auth().currentUser.uid
  );

  const snapShot = useFirestoreCollection(queryRef);

  function onCreate(term, definition) {
    ref.add({
      term,
      definition,
      author: firebaseApp.auth().currentUser.uid,
      createdAt: firebaseApp.firestore.FieldValue.serverTimestamp()
    });
  }

  return (
    <>
      <Header>Your Flashcards</Header>
      {snapShot.docs.map((snap, index) => (
        <Flashcard
          delay={`${index * 0.2}s`}
          key={snap.id}
          term={snap.get("term")}
          definition={snap.get("definition")}
        />
      ))}
      <FlashcardCreate onCreate={onCreate} />
    </>
  );
}

function SuspenseWrapper() {
  return (
    <Suspense fallback="loading...">
      <AuthCheck fallback={<SignInButton />}>
        <FlashcardPage />
      </AuthCheck>
    </Suspense>
  );
}

export default SuspenseWrapper;
