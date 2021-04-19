import React, { FC } from "react";

import { ChatUser } from "@utils/facebook/types";
import Section from "@components/facebook/Section";

import * as S from "./styles";

interface Props {
  users: ChatUser[];
}

const ChatList: FC<Props> = ({ users }) => (
  <Section>
    <S.Header>
      <span>Messenger</span>
      <a href="#">All</a>
    </S.Header>
    <div>
      {users.map(({ id, active, name, avatar }) => (
        <S.UserItem key={id}>
          <img src={avatar} />
          <span>{name}</span>
          <S.Status active={active} />
        </S.UserItem>
      ))}
    </div>
  </Section>
);

export default ChatList;
