import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";

export const SearchForm: React.FC = () => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">🔎</InputGroup.Text>
      <FormControl
        placeholder="Find a person"
      />
    </InputGroup>
  );
};
