import React from "react";
import { Card } from "./style";

function Flashcard({ term, definition, delay }) {
  return (
    <Card delay={delay}>
      <p>{term}</p>
      <p>{definition}</p>
    </Card>
  );
}

export default Flashcard;
