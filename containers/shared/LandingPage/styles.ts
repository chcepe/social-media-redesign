import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500&display=swap');

    body {
        background: rgb(33, 33, 33);
        color: #fff;
        font-family: 'Noto Sans TC', sans-serif;
        margin: 0;
        padding: 0;
        font-size: 14px;
    }

    a {
      text-decoration: none;
      color: rgb(42, 157, 244);
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
  padding-top: 60px;
  margin-bottom: 100px;

  span {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 5px;
    margin: 0 2px;
    border-radius: 3px;
  }

  p {
    line-height: 35px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 70px 0;
  grid-gap: 10px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Footer = styled.div`
  font-size: 15px;

  a {
    font-weight: bold;
  }
`;
