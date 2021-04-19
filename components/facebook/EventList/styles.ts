import styled from "styled-components";

import Section from "@components/facebook/Section";

export const Wrapper = styled(Section)`
  padding-top: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const EventItem = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 60px 1fr 10px;
  padding: 10px 20px;
  align-items: center;
  grid-gap: 10px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 10px;
  }
`;

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  span:nth-of-type(2) {
    margin-top: 5px;
    font-size: 12px;
    color: #9f9fa1;
  }
`;

export const EventHighlight = styled.div<{ img: string }>(
  ({ img }) => `
  background: url('${img}');
  background-size: cover;
  background-position: center;
  width: 100%;
  aspect-ratio: 4 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0.8;
  cursor: pointer;
  margin-bottom: 10px;

  span:nth-of-type(1){
    padding: 20px;
    font-weight: 700;
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
  }

  span:nth-of-type(2) {
    font-size: 12px;
    color: #9f9fa1;
    padding: 20px;
    background: linear-gradient(0deg,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 100%);
  }

  &:hover {
    opacity: 1;
  }
  `
);
