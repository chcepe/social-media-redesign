import styled from "styled-components";

export const Wrapper = styled.div<{ img: string }>(
  ({ img }) => `
  width: 100px;
  background: url('${img}');
  background-size: cover;
  background-position: center;
  aspect-ratio: 9 / 16;
  border-radius: 10px; 
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 0 0 auto;
  opacity: 0.8;
  position: relative;

  & > span {
    padding: 10px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  }

  img {
    border: 1px solid #1b78f1;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-top: 10px;
    margin-left: 10px;
  }

  &:not(:first-of-type){
    margin-left: 10px;
  }

  &:hover{
    opacity: 1;
  }
`
);

export const AddBtn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 10px;

  span {
    margin-top: 10px;
  }

  svg {
    padding: 5px;
    fill: #1877f2;
    background: #fff;
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
`;
