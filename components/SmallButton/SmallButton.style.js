import { styled } from "styled-components";

export const SmallButtonStyled = styled.button`
  ${(props) =>
    props.name === "back" &&
    `
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  font-size: 1.5em;
  border: none;
  position: absolute;
  left: 10px;
  `};
  ${(props) =>
    props.name === "edit" &&
    `
  background-color: var(--mainLightColor);
  color: var(--mainDarkColor);
  border-radius: 100%;
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 3em;
  width: 2em;
  height: 2em;`};
  ${(props) =>
    props.name === "delete" &&
    `
  background-color: var(--mainLightColor);
  color: var(--mainDarkColor);
  border-radius: 100%;
  position: absolute;
  right: 0px;
  top: -5px;
  font-weight: bolder;
  width: 2.5em;
  height: 2.5em; &:hover {
    background-color: color-mix(in srgb, var(--mainLightColor) 50%, red);
  }`}

  &:hover {
    color: color-mix(in srgb, var(--mainLightColor) 50%, var(--mainDarkColor));
  }
  &:active {
    color: var(--mainLightColor);
    box-shadow: inset 0px 0px 5px var(--mainDarkColor);
  }
`;
