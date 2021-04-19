import React, { FC } from "react";

import * as S from "./styles";

interface Props {
  img: string;
  name: string;
}

const UserCard: FC<Props> = ({ img, name }) => (
  <S.Wrapper>
    <img src={img} />
    <span>{name}</span>
  </S.Wrapper>
);

export default UserCard;
