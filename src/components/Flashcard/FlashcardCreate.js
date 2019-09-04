import React, { useState } from "react";
import { Card, Input, Label } from "./style";

const INITIAL_DATA = {
  term: "",
  definition: ""
};

function FlashcardCreate({ onCreate }) {
  const [formData, setFormdata] = useState(INITIAL_DATA);

  function onChange(event) {
    setFormdata({ ...formData, [event.target.name]: event.target.value });
  }

  function onSubmit(event) {
    event.preventDefault();
    onCreate(formData.term, formData.definition);
  }

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <Label htmlFor="term">Term</Label>
        <Input
          type="text"
          placeholder="Enter Term"
          id="term"
          name="term"
          onChange={onChange}
        />
        <Label htmlFor="definition">Definition</Label>
        <Input
          type="text"
          placeholder="Enter Definition"
          id="definition"
          name="definition"
          onChange={onChange}
        />
        <button type="submit">SEND IT</button>
      </form>
    </Card>
  );
}

export default FlashcardCreate;
