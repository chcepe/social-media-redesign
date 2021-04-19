import * as T from "@utils/facebook/types";
import PostItem from "@components/facebook/PostItem";
import React, { FC } from "react";

import * as S from "./styles";

interface Props {
  items: T.PostItem[];
}

const Feed: FC<Props> = ({ items }) => (
  <>
    <S.Header>
      <S.FeedType active>Top</S.FeedType>
      <S.FeedType>Most Recent</S.FeedType>
    </S.Header>
    <S.Posts>
      {items.map((item) => (
        <PostItem key={item.id} {...item} />
      ))}
    </S.Posts>
  </>
);

export default Feed;
