import styled from "styled-components";

const Section = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 10px 0;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  &:first-of-type {
    margin-top: 0;
  }
`;

export default Section;
