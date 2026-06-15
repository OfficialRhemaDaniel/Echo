// notifications.ts
export interface NotificationType {
  id: number;
  name: string;
  avatarUrl: string;
  type: 'like' | 'comment' | 'follow';
}

export const notifications: NotificationType[] = [
  {
    id: 1,
    name: "King Clever",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAr8uiBL0lT8ux9YKz4jX5rGTPqDMA-k9dFQ&s",
    type: "like",
  },
  {
    id: 2,
    name: "Peace",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsNmmkuh0RguYyM2OPNUxf4Ii7MmiNiXxpg&s",
    type: "follow",
  },
  {
    id: 3,
    name: "Alex",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAr8uiBL0lT8ux9YKz4jX5rGTPqDMA-k9dFQ&s",
    type: "comment",
  },
  {
    id: 4,
    name: "Rhema",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsNmmkuh0RguYyM2OPNUxf4Ii7MmiNiXxpg&s",
    type: "like",
  },
  {
    id: 5,
    name: "Daniel",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAr8uiBL0lT8ux9YKz4jX5rGTPqDMA-k9dFQ&s",
    type: "follow",
  },
  {
    id: 6,
    name: "Sophia",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsNmmkuh0RguYyM2OPNUxf4Ii7MmiNiXxpg&s",
    type: "comment",
  },
  {
    id: 7,
    name: "Jay",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAr8uiBL0lT8ux9YKz4jX5rGTPqDMA-k9dFQ&s",
    type: "like",
  },
  {
    id: 8,
    name: "Michael",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsNmmkuh0RguYyM2OPNUxf4Ii7MmiNiXxpg&s",
    type: "comment",
  },
];