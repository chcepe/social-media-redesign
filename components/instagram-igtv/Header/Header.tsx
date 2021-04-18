import React, { FC } from "react";

import { NavLink, NavType } from "@utils/instagram-igtv/types";
import * as Icons from "@assets/instagram-igtv/icons";

import * as S from "./styles";

interface Props {
  links: NavLink[];
}

const Header: FC<Props> = ({ links }) => {
  const activeNavId: NavType = "ig-tv";

  return (
    <S.Wrapper>
      <S.Logo />
      <S.NavList>
        {links.map(({ id, icon }) => (
          <S.NavItem href="#" active={id === activeNavId} key={id}>
            {icon}
          </S.NavItem>
        ))}
      </S.NavList>
      <S.MyAccount>
        <S.NavItem href="#">{Icons.Direct}</S.NavItem>
        <S.Avatar src="https://i.pravatar.cc/50?img=me" />
      </S.MyAccount>
    </S.Wrapper>
  );
};

export default Header;
