import { ImageSourcePropType } from "react-native";

export type Echo = {
  id: string;
  name: string;
  username: string;
  timeAgo: string;
  body: string;
  likes: string;
  comments: string;
  bookmarks: string;
  avatarUrl?: string;
  image?: ImageSourcePropType;
};

export const echos: Echo[] = [
  {
    id: "echo-1",
    name: "Akintola Bruce",
    username: "@akintola_bruce",
    timeAgo: "4hrs ago",
    body: "Tech these days has been a lot, I am not gonna lie. We push regardless, let us build!!!",
    likes: "14.5k",
    comments: "2.1k",
    bookmarks: "934",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: "echo-2",
    name: "Akintola Bruce",
    username: "@akintola_bruce",
    timeAgo: "4hrs ago",
    body: "Hey guys, take a look at who I adopted.",
    likes: "14.5k",
    comments: "14.5k",
    bookmarks: "14.5k",
    image: {
      uri: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    },
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: "echo-3",
    name: "David Okafor",
    username: "@davidcodes",
    timeAgo: "28mins ago",
    body: "Refactoring old code is really just reading a letter from your past self and deciding to be kind about it.",
    likes: "21k",
    comments: "3.8k",
    bookmarks: "5.6k",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    id: "echo-4",
    name: "Zara Bello",
    username: "@zarabello",
    timeAgo: "6hrs ago",
    body: "There is something peaceful about building in silence before the world wakes up.",
    likes: "5.7k",
    comments: "312",
    bookmarks: "789",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },
  {
    id: "echo-5",
    name: "Chris Morgan",
    username: "@chrismorgan",
    timeAgo: "1d ago",
    body: "Your first version does not need to be perfect. It just needs to be honest enough to improve.",
    likes: "32.4k",
    comments: "4.2k",
    bookmarks: "9.1k",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];
