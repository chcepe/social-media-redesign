import React, { FC } from "react";

import * as Icons from "@assets/instagram-igtv/icons";
import { CategoryType } from "@utils/instagram-igtv/types";

import { CATEGORIES } from "./constants";
import * as S from "./styles";

const CategoriesNav: FC = () => {
  const activeCategoryId: CategoryType = "for-you";

  return (
    <S.Wrapper>
      <S.CategoryList>
        {CATEGORIES.map(({ id, label }) => (
          <S.CategoryItem active={id === activeCategoryId} key={id}>
            {label}
          </S.CategoryItem>
        ))}
      </S.CategoryList>
      <S.Actions>
        <S.SearchInput />
        {Icons.Settings}
      </S.Actions>
    </S.Wrapper>
  );
};

export default CategoriesNav;
