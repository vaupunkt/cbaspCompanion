import { styled } from "styled-components";

export const EntryContent = styled.div`
  margin: 20px 0 20px 0;
  padding: 10px;
  border-top: solid;
  position: relative;
`;

export const ContentHeadline = styled.h2`
  background-color: var(--mainLightColor);
  text-align: center;
  font-size: 0.8em;
  margin: 0;
  padding: 5px 10px;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
