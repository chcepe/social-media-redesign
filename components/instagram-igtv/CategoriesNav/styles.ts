import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
`;

export const CategoryList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const CategoryItem = styled.li<{ active: boolean }>(
  ({ active }) => `
  cursor: pointer;
  font-weight: ${active ? 500 : 300};
  padding: 15px 40px;
  color: #fff;
  border-bottom: 2px solid #fff;
  opacity: ${active ? 1 : 0.4};

  &:hover {
    opacity: 0.7;
  }
`
);

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  align-items: center;
  grid-gap: 20px;
  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  svg:hover {
    opacity: 0.8;
  }
`;

export const SearchInput = styled.input.attrs({ placeholder: "Search" })`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  border: 0;
  padding: 10px;
  color: #fff;
  text-align: center;

  &:hover,
  &:active,
  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
`;
