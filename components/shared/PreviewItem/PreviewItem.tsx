import React, { FC } from "react";

import { Preview } from "@utils/shared/types";

import * as Icons from "@assets/shared/icons";

import * as S from "./styles";

const PreviewItem: FC<Preview> = ({ thumb, name, desc, link, wip }) => {
  return (
    <a {...(wip ? {} : { href: link, target: "_blank" })}>
      <S.Wrapper wip={wip}>
        <S.Thumb img={thumb}>
          {wip && <S.Rocket>{Icons.Rocket}</S.Rocket>}
        </S.Thumb>
        <h3>{name}</h3>
        <p>{desc}</p>
      </S.Wrapper>
    </a>
  );
};

export default PreviewItem;
