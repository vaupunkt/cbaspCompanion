import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primaryColor:  #f7f7f7;
    --secondaryColor: #262829;
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
    color: var(--primaryColor);
    background-color: var(--secondaryColor);
    transition: all 0.50s linear;

  }


.conversational-form .cf-progressBar {
  top: 60px;
}

`;
