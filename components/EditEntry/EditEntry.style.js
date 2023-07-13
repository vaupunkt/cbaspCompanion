import { styled } from "styled-components";

export const EditEntryContent = styled.div`
  margin: 20px 0 20px 0;
  padding: 10px;
  border-top: solid;
  position: relative;
`;

export const EditEntryLabel = styled.label`
  background-color: var(--mainLightColor);
  text-align: center;
  font-size: 0.8em;
  font-weight: bold;
  margin: 0;
  padding: 5px 10px;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const EditEntryInput = styled.textarea`
  width: 100%;
  font-size: 1em;
  margin-top: 15px;
  font-family: sans-serif;
  ${(prop) => (prop.long ? "height: 7em" : "")}
  ${(prop) => (prop.short ? "height: 1.5em" : "")}
`;
