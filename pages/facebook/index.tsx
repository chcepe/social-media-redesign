import React, { FC } from "react";

import Redesign from "@components/shared/Redesign";
import Header from "@components/facebook/Header";
import UserCard from "@components/facebook/UserCard";
import ChatList from "@components/facebook/ChatList";
import ActivityLogList from "@components/facebook/ActivityLogList";
import CreatePost from "@components/facebook/CreatePost";
import Stories from "@containers/facebook/Stories";
import Feed from "@containers/facebook/Feed";
import EventList from "@components/facebook/EventList";
import {
  CHAT_USERS,
  ACTIVITY_LOG_ITEMS,
  STORIES,
  POSTS_ITEMS,
  EVENT_ITEMS,
  USER,
  ADD_STORY_BG,
} from "@utils/facebook/dummy";

import * as S from "./styles";

const EVENT_HIGHLIGHT = EVENT_ITEMS[0];

const FacebookPage: FC = () => (
  <Redesign title="Facebook">
    <S.GlobalStyle />
    <S.Wrapper>
      <Header />
      <S.Home>
        <S.Column>
          <UserCard img={USER.avatar} name={USER.name} />
          <ChatList users={CHAT_USERS} />
          <ActivityLogList items={ACTIVITY_LOG_ITEMS} />
        </S.Column>
        <S.Column>
          <Stories addBG={ADD_STORY_BG} items={STORIES} />
          <CreatePost {...USER} />
          <Feed items={POSTS_ITEMS} />
        </S.Column>
        <S.Column>
          <EventList items={EVENT_ITEMS} highlight={EVENT_HIGHLIGHT} />
        </S.Column>
      </S.Home>
    </S.Wrapper>
  </Redesign>
);

export default FacebookPage;
