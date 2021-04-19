import React, { FC } from "react";

import { EventItem } from "@utils/facebook/types";

import * as S from "./styles";

interface Props {
  items: EventItem[];
  highlight: EventItem;
}

const EventList: FC<Props> = ({ items, highlight }) => (
  <S.Wrapper>
    <S.EventHighlight img={highlight.thumb}>
      <span>{highlight.title}</span>
      <span>{highlight.desc}</span>
    </S.EventHighlight>
    <S.Header>
      <span>Events</span>
      <a href="#">All</a>
    </S.Header>
    <div>
      {items.map(({ id, title, thumb, date }) => (
        <S.EventItem key={id}>
          <img src={thumb} />
          <S.EventInfo>
            <span>{title}</span>
            <span>{date}</span>
          </S.EventInfo>
        </S.EventItem>
      ))}
    </div>
  </S.Wrapper>
);

export default EventList;
