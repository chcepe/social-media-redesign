import React, { FC } from "react";

import Redesign from "@components/shared/Redesign";
import Header from "@components/instagram-igtv/Header";
import Feed from "@containers/instagram-igtv/Feed";
import { CURRENT_USER, POSTS } from "@utils/instagram-igtv/dummy";

import * as S from "./styles";

const IGTVPage: FC = () => (
  <Redesign title="Instagram">
    <S.GlobalStyle />
    <S.Wrapper>
      <Header user={CURRENT_USER} />
      <Feed posts={POSTS} />
    </S.Wrapper>
  </Redesign>
);

export default IGTVPage;
