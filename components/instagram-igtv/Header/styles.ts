import styled from "styled-components";

import Container from "@components/shared/Container";

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Logo = styled.img.attrs({
  src: "/instagram-igtv/logo.png",
})`
  height: 28px;
`;

export const NavList = styled.div`
  display: flex;
`;

export const NavItem = styled.a<{ active?: boolean }>(
  ({ active }) => `
  opacity: ${active ? 1 : 0.4}; 
  display: flex;
  svg {
    width: 20px;
    height: 20px;
  }
  &:not(:last-of-type) {
    margin-right: 30px;
  }
  &:hover{
    opacity: 0.7;
  }
`
);

export const MyAccount = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div<{ src: string }>(
  ({ src }) => `
  background: url('${src}');
  background-size: cover;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`
);
