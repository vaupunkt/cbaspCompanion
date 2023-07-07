import { styled } from "styled-components";

export const StyledDiv = styled.div`
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  position: fixed;
  top: 0;
  margin: 0;
  width: 100%;
  z-index: 1;
`;

export const StyledH1 = styled.h1`
  margin: 10px;
  font-size: 1.3em;
  text-align: right;
`;

export const StyledDate = styled.p`
  margin: 0 10px 10px 5px;
  font-size: 0.8em;
  text-align: right;
`;
