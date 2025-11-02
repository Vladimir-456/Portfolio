import type { Project } from '../types/project';

const sampleProjects: Project[] = [
  {
    id: 'sdsproj1abc123',
    title: 'Kekstagram UI Kit',
    description: 'Сайт является тренировочным проектом, созданный для изучения основ JavaScript.',
    imageUrl: 'https://raw.githubusercontent.com/AnN-Kuznetsova/AnN-Kuznetsova/main/img/kekstagram.jpg',
    favoriteIconUrl: '/images/favorite-svgrepo-com.svg',
    screenshots: [
      'https://raw.githubusercontent.com/AnN-Kuznetsova/AnN-Kuznetsova/main/img/kekstagram.jpg',
      'https://cs1.htmlacademy.ru/intensive/ecmascript-individual/2/projects/big-trip/image.png?v=202508051119',
      'https://assets.htmlacademy.ru/img/intensive/ecmascript/projects/moowle@1x.png',
      'https://cs1.htmlacademy.ru/intensive/ecmascript-individual/2/projects/taskmanager/image.png?v=202508051119',
      'https://raw.githubusercontent.com/AnN-Kuznetsova/AnN-Kuznetsova/main/img/kekstagram.jpg',
      'https://raw.githubusercontent.com/AnN-Kuznetsova/AnN-Kuznetsova/main/img/kekstagram.jpg'
    ],
    technologies: ['JavaScript'],
    href: 'https://example.com/ui-kit',
    isFavorite: false
  },
  {
    id: 'adsproj1abc150',
    title: 'Big Trip',
    description: 'Небольшое приложение для планирования своих путешествий.',
    imageUrl: 'https://cs1.htmlacademy.ru/intensive/ecmascript-individual/2/projects/big-trip/image.png?v=202508051119',
    favoriteIconUrl: '/images/favorite-svgrepo-com.svg',
    screenshots: [
      'https://cs1.htmlacademy.ru/intensive/ecmascript-individual/2/projects/big-trip/image.png?v=202508051119',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=4',
      'https://picsum.photos/800/600?random=5',
      'https://picsum.photos/800/600?random=6'
    ],
    technologies: ['Webpack', 'JavaScript', 'MVP/MVC', 'Паттерны проектирования'],
    href: 'https://example.com/portfolio',
     isFavorite: true
  },
  {
    id: 'dsqproj1abc323',
    title: 'Менеджер задач',
    description: 'Небольшое приложение для планирования своих задач.',
    imageUrl: 'https://cs1.htmlacademy.ru/intensive/ecmascript-individual/2/projects/taskmanager/image.png?v=202508051119',
    favoriteIconUrl: '/images/favorite-svgrepo-com.svg',
    screenshots: [
      'https://cs1.htmlacademy.ru/intensive/ecmascript-individual/2/projects/taskmanager/image.png?v=202508051119',
      'https://picsum.photos/800/600?random=7',
      'https://picsum.photos/800/600?random=8',
      'https://picsum.photos/800/600?random=9'
    ],
    technologies: ['JavaScript', 'MVP/MVC', 'Паттерны проектирования'],
    href: 'https://example.com/shop',
     isFavorite: true
  },
  {
    id: '1dproj1abc1fd23',
    title: 'Киноман',
    description: 'Приложения для поиска фильмов, сериалов и мультфильмов.',
    imageUrl: 'https://assets.htmlacademy.ru/img/intensive/ecmascript/projects/moowle@1x.png',
    favoriteIconUrl: '/images/favorite-svgrepo-com.svg',
    screenshots: [
      'https://assets.htmlacademy.ru/img/intensive/ecmascript/projects/moowle@1x.png',
      'https://picsum.photos/800/600?random=10',
      'https://picsum.photos/800/600?random=11',
      'https://picsum.photos/800/600?random=12',
      'https://picsum.photos/800/600?random=13',
      'https://picsum.photos/800/600?random=14'
    ],
    technologies: ['Webpack', 'JavaScript', 'MVP/MVC', 'Паттерны проектирования'],
    href: 'https://example.com/dashboard',
     isFavorite: false
  },
];

export default sampleProjects;