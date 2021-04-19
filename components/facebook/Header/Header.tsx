import React, { FC } from "react";

import { Logo } from "@assets/facebook/icons";

import { MY_ACCOUNT_BTNS, NAVIGATION_LINKS } from "./constants";
import * as S from "./styles";

const Header: FC = () => {
  const activeNavId = "home";

  return (
    <S.Wrapper>
      <S.Logo>{Logo}</S.Logo>
      <S.Navigation>
        <S.NavList>
          {NAVIGATION_LINKS.map(({ id, icon }) => (
            <S.NavItem active={id === activeNavId} key={id}>
              {icon}
            </S.NavItem>
          ))}
        </S.NavList>
        <S.SearchInput />
      </S.Navigation>
      <S.MyAccount>
        <S.Button>Create</S.Button>
        {MY_ACCOUNT_BTNS.map(({ id, icon }) => (
          <S.AccountAction key={id}>{icon}</S.AccountAction>
        ))}
      </S.MyAccount>
    </S.Wrapper>
  );
};

export default Header;
