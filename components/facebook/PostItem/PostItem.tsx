import React, { FC } from "react";

import * as Icons from "@assets/facebook/icons";
import * as T from "@utils/facebook/types";

import { ACTIONS } from "./constants";
import * as S from "./styles";

const PostItem: FC<T.PostItem> = ({ from, message, type, src, date }) => (
  <S.Wrapper>
    <S.User>
      <img src={from.avatar} />
      <S.UserInfo>
        <span>{from.name}</span>
        <span>{date}</span>
      </S.UserInfo>
      {Icons.HorizontalDots}
    </S.User>
    <div>
      {message && <S.Message>{message}</S.Message>}
      {src && (
        <S.Media>
          {type === "photo" && <img src={src} />}
          {type === "video" && (
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F${src}%2F&show_text=false`}
            ></iframe>
          )}
        </S.Media>
      )}
    </div>
    <S.Actions>
      {ACTIONS.map(({ id, label, icon }) => (
        <S.ActionItem key={id}>
          {icon} {label}
        </S.ActionItem>
      ))}
    </S.Actions>
  </S.Wrapper>
);

export default PostItem;
