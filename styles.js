import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --mainDarkColor: #0c0c0c;
    --mainLightColor: white;
    --physicalLevel: #8FA8FF;
    --emotionalLevel: #FF9191;
    --mentalLevel: #FFEA9C;
    --behavioralLevel: #92D58E;

  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: var(--mainDarkColor);
    background-color: var(--mainLightColor);
    font-family: system-ui;
  }

.conversational-form .cf-progressBar {
  top: 60px;
}

`;
