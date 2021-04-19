import {
  Explore,
  Home,
  IGTV,
  Likes,
  Search,
} from "@assets/instagram-igtv/icons";
import { NavLink } from "@utils/instagram-igtv/types";

export const NAVIGATION_LINKS: NavLink[] = [
  {
    id: "home",
    icon: Home,
  },
  {
    id: "search",
    icon: Search,
  },
  {
    id: "ig-tv",
    icon: IGTV,
  },
  {
    id: "explore",
    icon: Explore,
  },
  {
    id: "likes",
    icon: Likes,
  },
];
