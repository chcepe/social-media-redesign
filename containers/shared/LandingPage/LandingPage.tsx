import React, { FC } from "react";

import Container from "@components/shared/Container";
import PreviewItem from "@components/shared/PreviewItem";

import * as S from "./styles";
import { PREVIEW_LINKS } from "./constants";

const LandingPage: FC = () => {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <Container>
          <h1>🌙 social-media-redesign</h1>
          <p>A collection of social media dark mode redesign concept.</p>
          <p>
            Written in <span>React</span> and <span>TypeScript</span>, together
            with <span>styled-components</span>.
          </p>
          <S.List>
            {PREVIEW_LINKS.map((item) => (
              <PreviewItem key={item.id} {...item} />
            ))}
          </S.List>
          <S.Footer>
            Created with ❤️ by{" "}
            <a target="_blank" href="https://chcepe.github.io">
              chcepe
            </a>
          </S.Footer>
        </Container>
      </S.Wrapper>
    </>
  );
};

export default LandingPage;
