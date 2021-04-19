export interface User {
  name: string;
  id: string;
  avatar: string;
}

export type ChatUser = User & {
  active?: boolean;
};

export interface ActivityLogItem {
  id: string;
  thumb: string;
}

export interface Story {
  id: string;
  thumb: string;
  from: User;
}

export interface PostItem {
  id: string;
  message?: string;
  src?: string;
  date: string;
  type: "status" | "photo" | "video";
  from: User;
}

export interface EventItem {
  id: string;
  title: string;
  desc: string;
  date: string;
  thumb: string;
}
