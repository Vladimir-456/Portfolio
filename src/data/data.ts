import type { Project } from "../types/project";

const sampleProjects: Project[] = [
  {
    id: "sdsproj1abc123",
    title: "Kekstagram UI Kit",
    description:
      "Сайт является тренировочным проектом, созданный для изучения основ JavaScript.",
    imageUrl:
      "https://assets.htmlacademy.ru/img/intensive/javascript/projects/keksogram@2x.webp",
    favoriteIconUrl: "/images/favorite.svg",
    screenshots: [
      "https://assets.htmlacademy.ru/img/intensive/javascript/projects/keksogram@2x.webp",
    ],
    technologies: ["JavaScript"],
    href: "https://example.com/ui-kit",
    isFavorite: false,
  },
  {
    id: "adsproj1abc150",
    title: "Big Trip",
    description:
      "Современный сервис для настоящих путешественников. Сервис помогает детально спланировать маршрут поездки, рассчитать стоимость путешествия и получить информацию о достопримечательностях. Минималистичный интерфейс не даст повода отвлечься и сфокусирует внимание на планировании путешествия.",
    imageUrl:
      "https://assets.htmlacademy.ru/img/intensive/ecmascript/projects/bus@2x.webp",
    favoriteIconUrl: "/images/favorite.svg",
    screenshots: [
      "https://assets.htmlacademy.ru/img/intensive/ecmascript/projects/bus@2x.webp",
    ],
    technologies: [
      "Webpack",
      "JavaScript",
      "MVP/MVC",
      "Паттерны проектирования",
    ],
    href: "https://example.com/portfolio",
    isFavorite: true,
  },
  {
    id: "dsqproj1abc323",
    title: "Менеджер задач",
    description:
      "Персональный менеджер задач. Помогает пользователю организовать и контролировать выполнение задач. Минималистичный интерфейс приложения не позволит отвлекаться по пустякам и сфокусирует внимание на главном — задачах.",
    imageUrl:
      "https://assets.htmlacademy.ru/img/intensive/ecmascript/projects/task@2x.webp",
    favoriteIconUrl: "/images/favorite.svg",
    screenshots: [
      "https://cs1.htmlacademy.ru/intensive/ecmascript-individual/2/projects/taskmanager/image.png?v=202508051119",
      "https://picsum.photos/800/600?random=7",
      "https://picsum.photos/800/600?random=8",
      "https://picsum.photos/800/600?random=9",
    ],
    technologies: ["JavaScript", "MVP/MVC", "Паттерны проектирования"],
    href: "https://example.com/shop",
    isFavorite: true,
  },
  {
    id: "1dproj1abc1fd23",
    title: "Киноман",
    description: "Приложения для поиска фильмов, сериалов и мультфильмов.",
    imageUrl:
      "https://assets.htmlacademy.ru/img/intensive/ecmascript/projects/moowle@1x.png",
    favoriteIconUrl: "/images/favorite.svg",
    screenshots: [
      "https://assets.htmlacademy.ru/img/intensive/ecmascript/projects/moowle@1x.png",
      "https://picsum.photos/800/600?random=10",
      "https://picsum.photos/800/600?random=11",
      "https://picsum.photos/800/600?random=12",
      "https://picsum.photos/800/600?random=13",
      "https://picsum.photos/800/600?random=14",
    ],
    technologies: [
      "Webpack",
      "JavaScript",
      "MVP/MVC",
      "Паттерны проектирования",
    ],
    href: "https://example.com/dashboard",
    isFavorite: false,
  },
  {
    id: "1dproj1abc1fd243",
    title: "6 cities",
    description:
      "Современный сервис для путешественников, которые не хотят переплачивать за аренду жилья. В приложении можно получить актуальный список предложений по аренде в одном из шести популярных городов. Сортировка объектов и подробное описание каждого из них помогут быстро выбрать оптимальный вариант жилья. Авторизованные пользователи могут оставить отзыв и добавить предложение в избранное.",
    imageUrl:
      "https://assets.htmlacademy.ru/img/intensive/react/projects/cities@2x.jpg",
    favoriteIconUrl: "/images/favorite.svg",
    screenshots: [
      "https://assets.htmlacademy.ru/img/intensive/react/projects/cities@2x.jpg",
    ],
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Redux/Redux Toolkit",
      "VITE",
      "REST",
      "Axios",
      "Паттерны проектирования",
    ],
    href: "https://example.com/dashboard",
    isFavorite: false,
  },
];

export default sampleProjects;
