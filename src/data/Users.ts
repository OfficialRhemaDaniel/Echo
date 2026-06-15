export interface User {
  id: string;
  name: string;
  username: string;
  bio: string;
  avatarUri: string;
  coverUri: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "Lincoln Sage",
    username: "@lincoln_sage",
    bio: "A very rugged programmer from abagagana",
    avatarUri:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    coverUri:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "2",
    name: "Maya Carter",
    username: "@maya_codes",
    bio: "React Native engineer building clean mobile experiences",
    avatarUri:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    coverUri:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "3",
    name: "Devon Miles",
    username: "@devonmiles",
    bio: "Design-minded frontend dev with a soft spot for fast apps",
    avatarUri:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    coverUri:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "4",
    name: "Aisha Bello",
    username: "@aishabello",
    bio: "Mobile developer, product thinker, and weekend photographer",
    avatarUri:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    coverUri:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
  },
];
