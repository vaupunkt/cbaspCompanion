import { styled } from "styled-components";

export const DeleteButtonStyled = styled.button`
  background-color: var(--mainLightColor);
  color: var(--mainDarkColor);
  border-radius: 100%;
  position: absolute;
  right: 0px;
  top: -5px;
  font-weight: bolder;
  width: 2.5em;
  height: 2.5em;
  &:hover {
    background-color: color-mix(in srgb, var(--mainLightColor) 50%, red);
  }
  &:active {
    color: var(--mainLightColor);
    box-shadow: inset 0px 0px 5px var(--mainDarkColor);
  }
`;
