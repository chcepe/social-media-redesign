import styled from "styled-components";

import Section from "@components/facebook/Section";

export const Wrapper = styled(Section)`
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  grid-gap: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;

  span {
    font-weight: 700;
  }

  img {
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
`;
