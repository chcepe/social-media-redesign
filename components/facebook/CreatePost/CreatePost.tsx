import React, { FC } from "react";

import { User } from "@utils/facebook/types";
import * as Icons from "@assets/facebook/icons";

import * as S from "./styles";

const CreatePost: FC<User> = ({ avatar }) => (
  <S.Wrapper>
    <img src={avatar} />
    <S.Input />
    {Icons.Photo}
    {Icons.Video}
    {Icons.Attachment}
  </S.Wrapper>
);

export default CreatePost;
