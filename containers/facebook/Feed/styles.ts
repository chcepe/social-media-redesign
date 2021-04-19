import styled from "styled-components";

export const Posts = styled.div`
  margin-top: 10px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const FeedType = styled.div<{ active?: boolean }>(
  ({ active }) => `
  cursor: pointer;
  color: #${active ? "1877f2" : "9f9fa1"};
  font-weight: ${active ? "700" : "300"};
  text-align: center;
  padding: 20px;
  border-bottom: 2px solid ${active ? "#1877f2" : "rgba(255,255,255,0.1)"};

  &:hover {
      background: rgba(255,255,255,0.05);
  }
`
);
