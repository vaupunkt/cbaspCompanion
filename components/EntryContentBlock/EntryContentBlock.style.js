import { styled } from "styled-components";

export const EntryContent = styled.div`
  margin: 20px 0;
  padding: 10px;
  border-top: solid;
  position: relative;
`;

export const ContentHeadline = styled.label`
  background-color: var(--mainLightColor);
  text-align: center;
  font-size: 0.8em;
  margin: 0;
  padding: 5px 10px;
  position: absolute;
  top: 0px;
  left: 50%;
  font-weight: bold;
  transform: translate(-50%, -50%);
`;

export const EntryInput = styled.textarea`
  width: 100%;
  font-size: 1em;
  margin-top: 15px;
  font-family: sans-serif;
  ${(prop) => (prop.long ? "height: 7em" : "")}
  ${(prop) => (prop.short ? "height: 1.5em" : "")}
`;
