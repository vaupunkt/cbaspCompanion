import { styled } from "styled-components";

export const EditButtonStyled = styled.button`
  background-color: var(--mainLightColor);
  color: var(--mainDarkColor);
  border-radius: 100%;
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 3em;
  width: 2em;
  height: 2em;
  &:active {
    color: var(--mainLightColor);
    box-shadow: inset 0px 0px 5px var(--mainDarkColor);
  }
`;
