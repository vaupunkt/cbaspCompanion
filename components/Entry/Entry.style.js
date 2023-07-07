import { styled } from "styled-components";

export const EntryContent = styled.div`
  margin-top: 40px;
  padding: 10px;
  border-top: solid;
  position: relative;
`;

export const ContentHeadline = styled.h2`
  background-color: var(--mainLightColor);
  text-align: center;
  font-size: 0.8em;
  margin: 0;
  padding: 5px 20px;
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translate(-50%, 0);
`;
