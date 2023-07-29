import styled, { css } from "styled-components";

export const ButtonBody = styled.button`
  ${(props) =>
    props.variant === "big" &&
    css`
      border: solid;
      border-radius: 25px;
      background-color: var(--mainLightColor);
      color: var(--mainDarkColor);
      position: relative;
      height: 3em;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 20px auto;
    `}&:hover {
    ${(prop) =>
      prop.name === "delete"
        ? "background-color: color-mix(in srgb, var(--mainLightColor) 50%, red)"
        : ""};
    ${(prop) =>
      prop.name === "save"
        ? "background-color: color-mix(in srgb, var(--mainLightColor) 50%, green)"
        : ""};
  }
  ${(props) =>
    props.variant === "side" &&
    props.name === "save" &&
    css`
      border: solid;
      padding-right: 100px;
      border-radius: 25px;
      background-color: color-mix(in srgb, var(--mainLightColor) 50%, green);
      color: var(--mainDarkColor);
      position: fixed;
      bottom: 25px;
      right: -185px;
      z-index: 1;
      height: 3em;
      display: flex;
      align-items: center;
      margin: 20px auto;
      justify-content: flex-end;
      &:hover {
        transform: translatex(-110px);
      }
    `}
  ${(props) =>
    props.variant === "side" &&
    props.name === "delete" &&
    css`
      border: solid;
      padding-right: 100px;
      border-radius: 25px;
      background-color: color-mix(in srgb, var(--mainLightColor) 50%, red);
      color: var(--mainDarkColor);
      position: fixed;
      bottom: 70px;
      right: -175px;
      z-index: 1;
      display: flex;
      height: 3em;
      margin: 20px auto;
      align-items: center;
      justify-content: flex-end;
      &:hover {
        transform: translatex(-110px);
      }
    `}
  ${(props) =>
    props.variant === "small" &&
    props.name === "back" &&
    css`
      background-color: var(--mainDarkColor);
      color: var(--mainLightColor);
      font-size: 1.5em;
      border: none;
      position: absolute;
      left: 10px;
    `}
  ${(props) =>
    props.variant === "small" &&
    props.name === "edit" &&
    css`
      background-color: var(--mainLightColor);
      color: var(--mainDarkColor);
      border-radius: 100%;
      position: fixed;
      right: 20px;
      bottom: 20px;
      font-size: 3em;
      width: 2em;
      height: 2em;
    `}
   ${(props) =>
    props.variant === "small" &&
    props.name === "delete" &&
    css`
      background-color: var(--mainLightColor);
      color: var(--mainDarkColor);
      border-radius: 100%;
      position: absolute;
      right: 0px;
      top: -5px;
      font-weight: bolder;
      width: 2.5em;
      height: 2.5em;
    `}  
    ${(props) =>
    props.variant === "small" &&
    props.name === "deleteInterpretation" &&
    css`
      background-color: var(--mainLightColor);
      color: var(--mainDarkColor);
      border-radius: 100%;
      position: absolute;
      top: 15px;
      right: -15px;
      font-weight: bolder;
      width: 2.5em;
      height: 2.5em;
    `}
    ${(props) =>
    props.variant === "small" &&
    props.name === "deleteSymptom" &&
    css`
      background-color: var(--mainLightColor);
      color: var(--mainDarkColor);
      border-radius: 100%;
      position: absolute;
      top: -10px;
      right: -15px;
      font-weight: bolder;
      width: 2.5em;
      height: 2.5em;
    `}  
  &:hover {
    ${(prop) =>
      prop.name === "delete" ||
      prop.name === "deleteInterpretation" ||
      prop.name === "deleteSymptom"
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
  padding-right: 10px;
  padding-left: 10px;
  width: 100%;
`;
