import {
  ChatUser,
  ActivityLogItem,
  Story,
  PostItem,
  EventItem,
  User,
} from "./types";

export const USER: User = {
  id: "me",
  name: "Jane Doe",
  avatar: "https://i.pravatar.cc/50?img=me",
};

export const CHAT_USERS: ChatUser[] = [
  {
    id: "607c353b8a7606b2204f1f92",
    avatar: "https://i.pravatar.cc/50?u=607c353b8a7606b2204f1f92",
    name: "Willa Edith",
    active: false,
  },
  {
    id: "607c353bef50ba8f130d978b",
    avatar: "https://i.pravatar.cc/50?u=607c353bef50ba8f130d978b",
    name: "Simon Salas",
    active: false,
  },
  {
    id: "607c353b2e526fae8c9e1186",
    avatar: "https://i.pravatar.cc/50?u=607c353b2e526fae8c9e1186",
    name: "Martin Vivian",
    active: true,
  },
  {
    id: "607c353b24f12634e952a2bb",
    avatar: "https://i.pravatar.cc/50?u=607c353b24f12634e952a2bb",
    name: "Mcfadden Kelley",
    active: true,
  },
  {
    id: "607c353b7264f340d8099e03",
    avatar: "https://i.pravatar.cc/50?u=607c353b7264f340d8099e03",
    name: "Molina Susanna",
    active: false,
  },
];

export const ACTIVITY_LOG_ITEMS: ActivityLogItem[] = [
  {
    id: "607c39b3e0422f0e7a34f031",
    thumb: "https://picsum.photos/300/300?607c39b39bc5078c62426f8a",
  },
  {
    id: "607c39b3320fc013dfcdf007",
    thumb: "https://picsum.photos/300/300?607c39b34dc718f1eaebbf81",
  },
  {
    id: "607c39b3cbeb495bfd3defeb",
    thumb: "https://picsum.photos/300/300?607c39b307256a07088b5312",
  },
  {
    id: "607c39b3d6919dedef6155e8",
    thumb: "https://picsum.photos/300/300?607c39b317c324aa278bac15",
  },
  {
    id: "607c39b3227ddd8e99ae88aa",
    thumb: "https://picsum.photos/300/300?607c39b36dd9e5267b1f76c2",
  },
];

export const ADD_STORY_BG = "https://picsum.photos/300/300?add-story";

export const STORIES: Story[] = [
  {
    id: "607c55b68709350eb6f5f88e",
    thumb: "https://picsum.photos/500/800?607c55b60185adea0bb96fc0",
    from: {
      name: "Watts Cox",
      id: "607c55b6c2757be1f42be3ee",
      avatar: "https://i.pravatar.cc/50?u=607c55b6c2757be1f42be3ee",
    },
  },
  {
    id: "607c55b687dd6fda86918c60",
    thumb: "https://picsum.photos/500/800?607c55b675f00d55fec310b5",
    from: {
      name: "Tina Warren",
      id: "607c55b6de3da3a6d9a2b616",
      avatar: "https://i.pravatar.cc/50?u=607c55b6de3da3a6d9a2b616",
    },
  },
  {
    id: "607c55b66fb22910fbc0db24",
    thumb: "https://picsum.photos/500/800?607c55b6d108416bc4332434",
    from: {
      name: "Wooten Maxwell",
      id: "607c55b6308ffdf201433cca",
      avatar: "https://i.pravatar.cc/50?u=607c55b6308ffdf201433cca",
    },
  },
  {
    id: "607c55b6b037d9b7601cc842",
    thumb: "https://picsum.photos/500/800?607c55b6759ebe6f00417620",
    from: {
      name: "Jeanie Love",
      id: "607c55b685882dc3ec3e3503",
      avatar: "https://i.pravatar.cc/50?u=607c55b685882dc3ec3e3503",
    },
  },
  {
    id: "607c55b6426ed24e89db8d86",
    thumb: "https://picsum.photos/500/800?607c55b63f745f66ae06f610",
    from: {
      name: "Karyn Fowler",
      id: "607c55b68032465c21ec01a2",
      avatar: "https://i.pravatar.cc/50?u=607c55b68032465c21ec01a2",
    },
  },
  {
    id: "607c55b6cd05dcec2edb5d3b",
    thumb: "https://picsum.photos/500/800?607c55b6390a4cc9861c48f7",
    from: {
      name: "Lessie Bright",
      id: "607c55b67d3c3eddeca588d3",
      avatar: "https://i.pravatar.cc/50?u=607c55b67d3c3eddeca588d3",
    },
  },
  {
    id: "607c55b61483cf99bf5f9ebf",
    thumb: "https://picsum.photos/500/800?607c55b67ac88e95274169ab",
    from: {
      name: "Stone Potter",
      id: "607c55b6fad9e36247e76deb",
      avatar: "https://i.pravatar.cc/50?u=607c55b6fad9e36247e76deb",
    },
  },
  {
    id: "607c55b6934e1700be0f2d37",
    thumb: "https://picsum.photos/500/800?607c55b6e063ba02cb60c561",
    from: {
      name: "Velez Wooten",
      id: "607c55b6add2e6fbdb5027a2",
      avatar: "https://i.pravatar.cc/50?u=607c55b6add2e6fbdb5027a2",
    },
  },
  {
    id: "607c55b6daa18a4eedf0fab0",
    thumb: "https://picsum.photos/500/800?607c55b6a1d48c71ac369af3",
    from: {
      name: "Carmela Case",
      id: "607c55b68b9e042a66f823dc",
      avatar: "https://i.pravatar.cc/50?u=607c55b68b9e042a66f823dc",
    },
  },
  {
    id: "607c55b6f43226e048faba9a",
    thumb: "https://picsum.photos/500/800?607c55b6616bb2ce781c31e5",
    from: {
      name: "Wallace Cooper",
      id: "607c55b65bff30616a8168dd",
      avatar: "https://i.pravatar.cc/50?u=607c55b65bff30616a8168dd",
    },
  },
  {
    id: "607c55b6172ba808a4227c8f",
    thumb: "https://picsum.photos/500/800?607c55b6589080100a590a53",
    from: {
      name: "Mable Wilkerson",
      id: "607c55b62634de497e621166",
      avatar: "https://i.pravatar.cc/50?u=607c55b62634de497e621166",
    },
  },
  {
    id: "607c55b66637d81ebd1295f5",
    thumb: "https://picsum.photos/500/800?607c55b6fe12d058cad52b7d",
    from: {
      name: "Winifred Marks",
      id: "607c55b65264737fab42a813",
      avatar: "https://i.pravatar.cc/50?u=607c55b65264737fab42a813",
    },
  },
  {
    id: "607c55b66eb1fcfc0716efba",
    thumb: "https://picsum.photos/500/800?607c55b6791c1819345a44a4",
    from: {
      name: "Pierce Ramos",
      id: "607c55b6efe28fc22b9b2ecf",
      avatar: "https://i.pravatar.cc/50?u=607c55b6efe28fc22b9b2ecf",
    },
  },
  {
    id: "607c55b612168130c089dd0b",
    thumb: "https://picsum.photos/500/800?607c55b653d8f8ef72bafd1d",
    from: {
      name: "Sandra Hill",
      id: "607c55b668c20a4c414bdac0",
      avatar: "https://i.pravatar.cc/50?u=607c55b668c20a4c414bdac0",
    },
  },
  {
    id: "607c55b6c2ae217d5902dde0",
    thumb: "https://picsum.photos/500/800?607c55b659964b0511e2948d",
    from: {
      name: "Maryann Bridges",
      id: "607c55b6a35c0225d2c1db5e",
      avatar: "https://i.pravatar.cc/50?u=607c55b6a35c0225d2c1db5e",
    },
  },
];

export const POSTS_ITEMS: PostItem[] = [
  {
    id: "607c8b9b6fb2e661da90d7b1",
    type: "status",
    message: "lorem ipsum",
    date: "5m ago",
    from: {
      name: "Aisha Faulkner",
      id: "607c8b9b61c9da6de1533012",
      avatar: "https://i.pravatar.cc/50?u=607c8b9b61c9da6de1533012",
    },
  },
  {
    id: "607c8b9b8ef44e886f1ac850",
    type: "photo",
    src: "https://picsum.photos/1280/720?607c8b9b8ef44e886f1ac850",
    date: "1h ago",
    from: {
      name: "Yvonne Chavez",
      id: "607c8b9b9ee6896e6e72146f",
      avatar: "https://i.pravatar.cc/50?u=607c8b9b9ee6896e6e72146f",
    },
  },
  {
    id: "607c8b9b13ee761822d21c94",
    type: "video",
    src: "475233170175595",
    message:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "1h ago",
    from: {
      name: "Carla Burris",
      id: "607c8b9beb279219c81d0c0d",
      avatar: "https://i.pravatar.cc/50?u=607c8b9beb279219c81d0c0d",
    },
  },
  {
    id: "607c8b9bf2855bc4b2ee3f2c",
    type: "status",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "3h ago",
    from: {
      name: "Jennie Castillo",
      id: "607c8b9b2f2f1c2d2d1b4b7e",
      avatar: "https://i.pravatar.cc/50?u=607c8b9b2f2f1c2d2d1b4b7e",
    },
  },
  {
    id: "607c8b9b6760f75e24b1c5a9",
    type: "video",
    src: "557283818563034",
    date: "1d ago",
    from: {
      name: "Burris Nelson",
      id: "607c8b9b8e8d051bdc36bc05",
      avatar: "https://i.pravatar.cc/50?u=607c8b9b8e8d051bdc36bc05",
    },
  },
];

export const EVENT_ITEMS: EventItem[] = [
  {
    id: "607d38e484dc73a19508bd66",
    thumb: "https://picsum.photos/300/500?607d38e4918c3d9a8e42762f",
    title: "velit minim",
    desc: "ullamco enim sint",
    date: "04 Jun 2021",
  },
  {
    id: "607d38e4a04609952a5e1006",
    thumb: "https://picsum.photos/300/500?607d38e4368882ae5f7d8525",
    title: "enim aliqua",
    desc: "velit amet enim",
    date: "19 Oct 2021",
  },
  {
    id: "607d38e42a0872243a63f938",
    thumb: "https://picsum.photos/300/500?607d38e488d55459085b71b0",
    title: "labore esse",
    desc: "elit eu do",
    date: "22 Dec 2021",
  },
  {
    id: "607d38e4fad0d91ef588442e",
    thumb: "https://picsum.photos/300/500?607d38e4ae66e2168ba15125",
    title: "officia reprehenderit",
    desc: "nostrud sint et",
    date: "04 Jan 2022",
  },
  {
    id: "607d38e423e9d53e29bf7919",
    thumb: "https://picsum.photos/300/500?607d38e48ecdf26caf09fa14",
    title: "exercitation mollit",
    desc: "exercitation dolore magna",
    date: "06 May 2022",
  },
];
