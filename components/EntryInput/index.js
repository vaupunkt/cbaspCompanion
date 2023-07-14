import { useState } from "react";
import { styled } from "styled-components";

const StyledEntryInput = styled.textarea`
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
      <StyledEntryInput
        long={long}
        short={short}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onInput={handleInput}
      />
      <RemainingLength>{remainingLength} Zeichen übrig</RemainingLength>
    </>
  );
}
