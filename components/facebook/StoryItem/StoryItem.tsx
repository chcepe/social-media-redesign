import React, { FC } from "react";

import * as Icons from "@assets/facebook/icons";
import { Story } from "@utils/facebook/types";

import * as S from "./styles";

export const AddStory: FC<{ bg: string }> = ({ bg }) => (
  <S.Wrapper img={bg}>
    <S.AddBtn>
      {Icons.Add}
      <span>Add story</span>
    </S.AddBtn>
  </S.Wrapper>
);

const StoryItem: FC<Story> = ({ thumb, from }) => (
  <S.Wrapper img={thumb}>
    <img src={from.avatar} />
    <span>{from.name}</span>
  </S.Wrapper>
);

export default StoryItem;
