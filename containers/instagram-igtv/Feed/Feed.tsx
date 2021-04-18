import React, { FC } from "react";

import CategoriesNav from "@components/instagram-igtv/CategoriesNav";
import Container from "@components/shared/Container";
import FeedItem from "@components/instagram-igtv/FeedItem";
import { Category, Post } from "@utils/instagram-igtv/types";

import * as S from "./styles";

interface Props {
  categories: Category[];
  posts: Post[];
}

const Feed: FC<Props> = ({ categories, posts }) => {
  return (
    <Container>
      <CategoriesNav categories={categories} />
      <S.FeedList>
        {posts.map((post) => (
          <FeedItem key={post.id} {...post} />
        ))}
      </S.FeedList>
    </Container>
  );
};

export default Feed;
