import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
    body {
        background: #121212;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }

    * {
      box-sizing: border-box;
      transition: all 0.2s ease;
      transition-property: background, opacity;
    }

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  width: 100%;
  height: 100vh;
  grid-gap: 20px;
`;

export default () => {
  return "";
};
