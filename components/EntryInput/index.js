import { useState } from "react";
import { styled } from "styled-components";

const StyledEntryInputTextarea = styled.textarea`
  width: 100%;
  font-size: 1em;
  margin-top: 15px;
  font-family: sans-serif;
  ${(prop) => (prop.long ? "height: 7em" : "")}
  ${(prop) => (prop.short ? "height: 1.5em" : "")}
`;

const StyledEntryInput = styled.input`
  width: 100%;
  font-size: 1em;
  margin-top: 15px;
  font-family: sans-serif;
  ${(prop) => (prop.long ? "height: 7em" : "")}
  ${(prop) => (prop.short ? "height: 1.5em" : "")}
`;

const RemainingLength = styled.p`
  text-align: right;
  font-size: 0.8em;
  margin: 0;
  color: color-mix(in srgb, var(--mainDarkColor) 50%, white);
`;

export default function EntryInput({
  type,
  long,
  short,
  name,
  id,
  value,
  onChange,
  required,
  list,
}) {
  let maxLength;
  if (short) {
    maxLength = 200;
  } else if (long) {
    maxLength = 500;
  }

  const [remainingLength, setRemainingLength] = useState(
    maxLength - (value ? value.length : 0)
  );

  function handleInput(event) {
    let currentLength = event.target.value.length;
    setRemainingLength(maxLength - currentLength);
  }

  return (
    <>
      {list ? (
        <StyledEntryInput
          required={required}
          maxLength={short ? "200" : "500"}
          long={long}
          short={short}
          type={type}
          name={name}
          id={id}
          value={value}
          list={list}
          onChange={onChange}
          onInput={handleInput}
        />
      ) : short ? (
        <StyledEntryInput
          required={required}
          maxLength="200"
          long={long}
          short={short}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onInput={handleInput}
        />
      ) : (
        <StyledEntryInputTextarea
          required={required}
          maxLength="500"
          long={long}
          short={short}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onInput={handleInput}
        />
      )}
      <RemainingLength>{remainingLength} Zeichen übrig</RemainingLength>
    </>
  );
}
