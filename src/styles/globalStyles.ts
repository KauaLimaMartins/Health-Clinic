import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Canaro';
    src: url('/fonts/Canaro/Canaro_SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }


  @font-face {
    font-family: 'Effra';
    src: url('/fonts/Effra/Effra_Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sagoe UI';
    src: url('/fonts/Sagoe_UI/Segoe_UI_Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sagoe UI';
    src: url('/fonts/Sagoe_UI/Segoe_UI_Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    font-size: 1rem;
    scroll-behavior: smooth;
  }
  
  body {
    -webkit-font-smoothing: antialiased !important;
    color: ${({ theme }) => theme.colors.textPrimary}; 
  }
  
  button, a {
    cursor: pointer;
  }
`;
