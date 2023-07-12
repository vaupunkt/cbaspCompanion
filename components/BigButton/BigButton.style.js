import { styled } from "styled-components";

export const BigButtonBody = styled.button`
  background-color: var(--mainLightColor);
  color: var(--mainDarkColor);
  position: relative;
  height: 3em;
  margin: 20px auto;
  border: solid;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &:hover {
    ${(prop) =>
      prop.name === "delete"
        ? "background-color: color-mix(in srgb, var(--mainLightColor) 50%, red)"
        : "background-color: color-mix(in srgb, var(--mainLightColor) 90%, blue)"};
  }
  &:active {
    box-shadow: inset 0px 0px 5px var(--mainDarkColor);
  }
`;

export const BigButtonIcon = styled.p`
  border: solid;
  border-radius: 100%;
  width: 3em;
  height: 3em;
  padding: 5px;
  margin: 0;
  position: absolute;
  top: -0.2em;
  left: -1.5em;
  text-align: center;
  background-color: var(--mainLightColor);
`;

export const BigButtonDescription = styled.p`
  font-size: 1.2em;
  text-align: right;
  padding-right: 15px;
  width: 100%;
  padding-left: 20px;
`;
