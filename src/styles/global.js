import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #App{
    min-height: 100%;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    background: #ff9839;
    -webkit-font-smoothing: antialiased;
  }
`;

//Neste arquivo se define a configuração dos estilos globais, aqueles que serão aplicados a mais de um elemento ou ainda a página inteira.
