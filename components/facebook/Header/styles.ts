import styled from "styled-components";

import Container from "@components/shared/Container";
import { GRID_LAYOUT } from "@utils/facebook/constants";

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: ${GRID_LAYOUT.template};
  grid-gap: ${GRID_LAYOUT.gap};
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0;
`;

export const Logo = styled.div`
  svg {
    height: 30px;
    cursor: pointer;
  }
`;

export const Navigation = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
  align-items: center;
`;

export const NavList = styled.div`
  display: flex;
  height: 100%;
`;

export const SearchInput = styled.input.attrs({ placeholder: "Search" })`
  border: 0;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  height: 40px;
  color: #fff;

  &:hover,
  &:focus,
  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const NavItem = styled.div<{ active?: boolean }>(
  ({ active }) => `
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 30px;
  ${active ? "border-bottom: 2px solid #1877f2;" : ""}
  cursor: pointer;

  &:hover{
    opacity: 0.7;
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: #${active ? "1877f2" : "9f9fa1"};
  }
`
);

export const MyAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background: #1877f2;
  color: #fff;
  border: 0;
  border-radius: 100px;
  padding: 0 20px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background: #1670e5;
  }
`;

export const AccountAction = styled.div`
  padding: 0 10px;
  svg {
    fill: #9f9fa1;
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
