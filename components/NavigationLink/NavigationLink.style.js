import { styled } from "styled-components";
import Link from "next/link";

export const StyledNavigationLink = styled(Link)`
  border: solid;
  border-color: var(--mainDarkColor);
  padding: 10px;
  margin: 10px;
  border-radius: 25px;
  color: var(--mainLightColor);
  background-color: var(--mainDarkColor);
  text-decoration: none;
  font-size: 1.3em;
  align-self: flex-end;

  &:hover {
    background-color: color-mix(
      in srgb,
      var(--mainDarkColor) 80%,
      var(--mainLightColor)
    );
  }
  &:active {
    box-shadow: inset 0px 0px 5px var(--mainLightColor);
  }
`;
