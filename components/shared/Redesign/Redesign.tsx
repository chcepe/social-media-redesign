import React, { FC } from "react";
import Head from "next/head";

import * as S from "./styles";

interface Props {
  title: string;
}

const Redesign: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      <S.Copyright>
        Made with ❤️ by{" "}
        <a target="_blank" href="https://chcepe.github.io/">
          chcepe
        </a>
      </S.Copyright>
    </>
  );
};

export default Redesign;
