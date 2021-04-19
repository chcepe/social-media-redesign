import React, { FC } from "react";

import { NavType, User } from "@utils/instagram-igtv/types";
import * as Icons from "@assets/instagram-igtv/icons";

import { NAVIGATION_LINKS } from "./constants";
import * as S from "./styles";

interface Props {
  user: User;
}

const Header: FC<Props> = ({ user }) => {
  const activeNavId: NavType = "ig-tv";

  return (
    <S.Wrapper>
      <S.Logo />
      <S.NavList>
        {NAVIGATION_LINKS.map(({ id, icon }) => (
          <S.NavItem href="#" active={id === activeNavId} key={id}>
            {icon}
          </S.NavItem>
        ))}
      </S.NavList>
      <S.MyAccount>
        <S.NavItem href="#">{Icons.Direct}</S.NavItem>
        <S.Avatar src={user.avatar} />
      </S.MyAccount>
    </S.Wrapper>
  );
};

export default Header;
