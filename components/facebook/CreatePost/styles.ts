import styled from "styled-components";

import Section from "@components/facebook/Section";

export const Wrapper = styled(Section)`
  display: grid;
  grid-template-columns: 50px 1fr 20px 20px 20px;
  grid-gap: 20px;
  padding: 20px;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    fill: #aeafb1;
    cursor: pointer;
    &:hover {
      fill: #ffffff;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
`;

export const Input = styled.textarea.attrs({
  placeholder: "What's on your mind?",
})`
  width: 100%;
  height: 100%;
  resize: none;
  background: none;
  color: #fff;
  border: none;
`;
