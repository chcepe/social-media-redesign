import React, { FC } from "react";

import StoryItem, { AddStory } from "@components/facebook/StoryItem";
import { Story } from "@utils/facebook/types";

import * as S from "./styles";

interface Props {
  items: Story[];
  addBG: string;
}

const Stories: FC<Props> = ({ items, addBG }) => (
  <S.Wrapper>
    <AddStory bg={addBG} />
    {items.map((item) => (
      <StoryItem key={item.id} {...item} />
    ))}
  </S.Wrapper>
);

export default Stories;
