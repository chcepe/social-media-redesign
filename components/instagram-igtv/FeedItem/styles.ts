import styled from "styled-components";

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.2s ease;
`;

export const Thumbnail = styled.div<{ img: string }>(
  ({ img }) => `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('${img}') no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
  opacity: 0.6;
`
);

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FeedItem = styled.div`
  width: 100%;
  aspect-ratio: 9 / 16;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;

  * {
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  }

  ${Thumbnail}, ${Content}, ${Actions} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover ${Actions} {
    opacity: 1;
  }

  &:hover ${Thumbnail} {
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const Top = styled.div`
  width: 100%;
  text-align: right;
  font-size: 13px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Recommended = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #cfcfcf;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Account = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-gap: 10px;
  align-items: center;
`;

export const Username = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 5px;
    width: 15px;
    height: 15px;
  }
`;

export const Avatar = styled.div<{ src: string }>(
  ({ src }) => `
  background: url('${src}');
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
`
);
