export type NavType =
  | "home"
  | "direct-message"
  | "explore"
  | "likes"
  | "search"
  | "ig-tv";

export interface NavLink {
  id: NavType;
  icon: React.ReactNode;
}

export type CategoryType =
  | "for-you"
  | "following"
  | "popular"
  | "featured"
  | "live"
  | "watch-later";

export interface Category {
  id: CategoryType;
  label: string;
}

export interface User {
  username: string;
  verified?: boolean;
  avatar: string;
}

export interface Post {
  id: string;
  from: User;
  title: string;
  length: string;
  thumb: string;
  recommended?: boolean;
}
