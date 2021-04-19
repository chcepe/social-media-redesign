import React, { FC } from "react";

import CategoriesNav from "@components/instagram-igtv/CategoriesNav";
import Container from "@components/shared/Container";
import FeedItem from "@components/instagram-igtv/FeedItem";
import { Post } from "@utils/instagram-igtv/types";

import * as S from "./styles";

interface Props {
  posts: Post[];
}

const Feed: FC<Props> = ({ posts }) => (
  <Container>
    <CategoriesNav />
    <S.FeedList>
      {posts.map((post) => (
        <FeedItem key={post.id} {...post} />
      ))}
    </S.FeedList>
  </Container>
);

export default Feed;
