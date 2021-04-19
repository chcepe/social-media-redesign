import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
}
`;
