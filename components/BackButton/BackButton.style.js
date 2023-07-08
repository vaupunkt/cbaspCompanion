import { styled } from "styled-components";

export const BackButtonStyled = styled.button`
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  border: none;
  font-size: 1.5em;
  &:hover {
    color: color-mix(in srgb, var(--mainLightColor) 50%, var(--mainDarkColor));
  }
  &:active {
    color: var(--mainLightColor);
  }
`;
