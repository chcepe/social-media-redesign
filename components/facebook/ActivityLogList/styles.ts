import styled from "styled-components";

import Section from "@components/facebook/Section";

export const Wrapper = styled(Section)`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Menu = styled.div`
  svg {
    cursor: pointer;
    fill: #5f6063;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const Item = styled.div<{ img: string }>(
  ({ img }) => `
  background: url('${img}');
  background-size: cover;
  background-position: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 10px; 
  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }
`
);
