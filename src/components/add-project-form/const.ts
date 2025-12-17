export const projectSteps = [
  {
    id: 1,
    title: 'Basic info',
    fields: ['title', 'description', 'type'] as const
  },
  {
    id: 2,
    title: 'Links & media',
    fields: ['href', 'imageUrl', 'favoriteIconUrl'] as const
  },
  {
    id: 3,
    title: 'Tech & screenshots',
    fields: ['technologies', 'screenshots'] as const
  },
  {
    id: 4,
    title: 'Favorite',
    fields: ['isFavorite'] as const
  }
];