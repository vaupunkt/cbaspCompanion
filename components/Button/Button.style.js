import { styled } from "styled-components";

export const ButtonBody = styled.button`
  ${(props) =>
    props.variant === "big"
      ? "border: solid;  border-radius: 25px;  background-color: var(--mainLightColor);  color: var(--mainDarkColor);  position: relative;  height: 3em;  margin: 20px auto;  display: flex;  align-items: center;  justify-content: flex-end;"
      : ""}
  ${(props) =>
    props.variant === "small" && props.name === "back"
      ? `background-color: var(--mainDarkColor);
      color: var(--mainLightColor);
      font-size: 1.5em;
      border: none;
      position: absolute;
      left: 10px;`
      : props.variant === "small" && props.name === "edit"
      ? `background-color: var(--mainLightColor);
  color: var(--mainDarkColor);
  border-radius: 100%;
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 3em;
  width: 2em;
  height: 2em;`
      : props.variant === "small" && props.name === "delete"
      ? `background-color: var(--mainLightColor);
  color: var(--mainDarkColor);
  border-radius: 100%;
  position: absolute;
  right: 0px;
  top: -5px;
  font-weight: bolder;
  width: 2.5em;
  height: 2.5em; `
      : ""}  
  &:hover {
    ${(prop) =>
      prop.name === "delete"
        ? "background-color: color-mix(in srgb, var(--mainLightColor) 50%, red)"
        : ""};
  }
  &:active {
    box-shadow: inset 0px 0px 5px var(--mainDarkColor);
  }
`;

export const ButtonDescription = styled.p`
  font-size: 1.2em;
  text-align: right;
  padding-right: 15px;
  width: 100%;
  padding-left: 20px;
`;
