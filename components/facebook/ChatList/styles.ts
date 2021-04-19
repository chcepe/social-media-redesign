import styled from "styled-components";

export const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const UserItem = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 20px 1fr 10px;
  padding: 10px 20px;
  align-items: center;
  grid-gap: 10px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  img {
    width: 20px;
    height: 20px;
    border-radius: 100%;
  }
`;

export const Status = styled.div<{ active?: boolean }>(
  ({ active }) => `
  background: #${active ? "00af5b" : "313336"};
  width: 10px;
  height: 10px;
  border-radius: 100%;
`
);
