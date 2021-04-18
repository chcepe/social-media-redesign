import React, { FC } from "react";

import * as Icons from "@assets/instagram-igtv/icons";
import { Category, CategoryType } from "@utils/instagram-igtv/types";

import * as S from "./styles";

interface Props {
  categories: Category[];
}

const CategoriesNav: FC<Props> = ({ categories }) => {
  const activeCategoryId: CategoryType = "for-you";

  return (
    <S.Wrapper>
      <S.CategoryList>
        {categories.map(({ id, label }) => (
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
