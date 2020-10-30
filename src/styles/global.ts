import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family:"Roboto";
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  button a {
    cursor: pointer;
  }

  a {
    text-decoration:none;
  }
`;
