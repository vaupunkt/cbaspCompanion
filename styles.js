import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --mainDarkColor:  #f7f7f7;
    --mainLightColor:#262829;
    --accentColorLight: #6e65e8;
    --accentColorDark: #9fa5d2;
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

  
  html, body {
    margin: 0;
    font-family: system-ui;
    color: var(--mainDarkColor);
    background-color: var(--mainLightColor);
    transition: all 0.50s linear;

  }


.conversational-form .cf-progressBar {
  top: 60px;
}

`;
