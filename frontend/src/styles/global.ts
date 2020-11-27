import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  input,button,textarea {
    font-family: Roboto, sans-serif;
  }

  body {
    font-family: Roboto, sans-serif;
    background-color: #111;
  }
`;
