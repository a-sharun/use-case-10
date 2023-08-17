import React, { useRef, useState } from "react";
import Input from "./Input";
import { validateString } from "../utils";

const MAX_INPUT_LENGTH = 15;

function Form() {
  const [validatedInputs, setValidatedInputs] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = inputRef.current.value;
    const isValid = validateString(inputRef.current.value, MAX_INPUT_LENGTH);
    if (inputRef.current) {
      setValidatedInputs((prev) => [...prev, { input, isValid }]);
    }
    inputRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {validatedInputs.map(({ input, isValid }) => {
          return (
            <li>
              Input value <em>| {input} |</em> is{" "}
              {(isValid ? "valid" : "invalid").toUpperCase()}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Form;
