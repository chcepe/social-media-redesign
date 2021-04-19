import styled from "styled-components";

import Section from "@components/facebook/Section";

export const Wrapper = styled(Section)`
  padding-bottom: 0;
  overflow: hidden;
`;

export const User = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 40px 1fr 10px;
  grid-gap: 10px;
  align-items: center;
  margin-bottom: 20px;

  svg {
    fill: #5f6063;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }

  img,
  span {
    cursor: pointer;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    width: fit-content;
  }

  span:nth-child(1) {
    font-weight: 700;
    margin-bottom: 3px;
  }

  span:nth-child(2) {
    font-size: 12px;
    color: #9f9fa1;
  }
`;

export const Message = styled.div`
  padding: 0 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Media = styled.div`
  margin-top: 10px;

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: none;
  }
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ActionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
