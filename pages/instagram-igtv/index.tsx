import React, { FC } from "react";

import Redesign from "@components/shared/Redesign";
import Header from "@components/instagram-igtv/Header";
import Feed from "@containers/instagram-igtv/Feed";
import {
  CATEGORIES,
  NAVIGATION_LINKS,
  POSTS,
} from "@utils/instagram-igtv/dummy";

import * as S from "./styles";

const IGTVPage: FC = () => {
  return (
    <Redesign title="Instagram">
      <S.GlobalStyle />
      <S.Wrapper>
        <Header links={NAVIGATION_LINKS} />
        <Feed posts={POSTS} categories={CATEGORIES} />
      </S.Wrapper>
    </Redesign>
  );
};

export default IGTVPage;
