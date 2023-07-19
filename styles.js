import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --mainDarkColor: #0c0c0c;
    --mainLightColor: white;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: var(--mainDarkColor);
    font-family: system-ui;
  }


`;
