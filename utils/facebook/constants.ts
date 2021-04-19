import { Like, Comment, Share } from "@assets/facebook/icons";

export const GRID_LAYOUT = {
  template: "1fr 3fr 1fr",
  gap: "20px",
};

export const ACTIONS = [
  { id: "like", icon: Like, label: "Like" },
  { id: "comment", icon: Comment, label: "Comment" },
  { id: "share", icon: Share, label: "Share" },
];
