import React, { FC } from "react";

import { ActivityLogItem } from "@utils/facebook/types";
import { HorizontalDots } from "@assets/facebook/icons";

import * as S from "./styles";

interface Props {
  items: ActivityLogItem[];
}

const ActivityLogList: FC<Props> = ({ items }) => (
  <S.Wrapper>
    <S.Header>
      <span>Recently Viewed</span>
      <S.Menu>{HorizontalDots}</S.Menu>
    </S.Header>
    <S.List>
      {items.map(({ id, thumb }) => (
        <S.Item key={id} img={thumb} />
      ))}
    </S.List>
  </S.Wrapper>
);

export default ActivityLogList;
