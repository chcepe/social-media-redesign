import React, { FC } from "react";

import * as Icons from "@assets/instagram-igtv/icons";
import { Post } from "@utils/instagram-igtv/types";

import * as S from "./styles";

const FeedItem: FC<Post> = ({ thumb, length, title, recommended, from }) => (
  <S.FeedItem>
    <S.Thumbnail img={thumb} />
    <S.Actions>{Icons.Play}</S.Actions>
    <S.Content>
      <S.Top>{length}</S.Top>
      <S.Bottom>
        {recommended && <S.Recommended>Recommended</S.Recommended>}
        <S.Title>{title}</S.Title>
        <S.Account>
          <S.Avatar src={from.avatar} />
          <S.Username>
            {from.username}
            {from.verified && <>{Icons.Verified}</>}
          </S.Username>
        </S.Account>
      </S.Bottom>
    </S.Content>
  </S.FeedItem>
);

export default FeedItem;
