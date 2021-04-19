import styled, { createGlobalStyle } from "styled-components";

import Container from "@components/shared/Container";
import { GRID_LAYOUT } from "@utils/facebook/constants";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
    body {
        background: #0f0f13;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        font-size: 14px;
    }

    a {
      text-decoration: none;
      color: #1877f2;
    }

    textarea {
        font-family: 'Roboto', sans-serif;
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

export const Home = styled(Container)`
  display: grid;
  grid-template-columns: ${GRID_LAYOUT.template};
  grid-gap: ${GRID_LAYOUT.gap};
  padding: 0;
  margin-bottom: 100px;
`;

export const Column = styled.div`
  overflow: hidden;
`;

export default () => {
  return "";
};
