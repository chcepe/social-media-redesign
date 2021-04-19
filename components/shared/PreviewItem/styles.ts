import styled from "styled-components";

export const Wrapper = styled.div<{ wip?: boolean }>(
  ({ wip }) => `
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0);

  ${
    !wip
      ? `
    cursor: pointer;
    &:hover {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }`
      : ""
  }

  p {
    line-height: normal;
    color: rgba(255, 255, 255, 0.6);
  }
`
);

export const Thumb = styled.div<{ img: string }>(
  ({ img }) => `
  position: relative;
  background: url('${img}') no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  aspect-ratio: 3 / 2;
  `
);

export const Rocket = styled.div`
  background: #242424;
  border-radius: 100%;
  padding: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #424242;
  position: absolute;
  bottom: 0px;
  right: 0;
`;
