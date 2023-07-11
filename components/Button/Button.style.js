import { styled } from "styled-components";

export const BackButton = styled.button`
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  border: none;
  font-size: 1.5em;
  position: absolute;
  left: 10px;
  &:hover {
    color: color-mix(in srgb, var(--mainLightColor) 50%, var(--mainDarkColor));
  }
  &:active {
    color: var(--mainLightColor);
  }
`;

export const EditButton = styled.button`
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

export const DeleteButton = styled.button`
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
