import sampleProjects from "./data/data"
import type { Project } from "./types/project"

export const filters : Record<string, Project[]> = {
    'all': sampleProjects,
    'Паттерны': sampleProjects.filter(p => p.technologies.includes('Паттерны проектирования')),
    'Webpack': sampleProjects.filter(p => p.technologies.includes('Webpack')),
    'MVP/MVC': sampleProjects.filter(p => p.technologies.includes('MVP/MVC')),
    'JavaScript': sampleProjects.filter(p => p.technologies.includes('JavaScript'))
}
export const FILTERS : string[] = ['all', 'Паттерны', 'Webpack', 'MVP/MVC', 'JavaScript']

export const URL = 'https://cs1.htmlacademy.ru/intensive/ecmascript-individual/2/projects'


export const AppRoute = {
  Main: '/',
  Login: '/login',
  Admin: '/admin',
  AboutMe: '/about-me',
  Contacts: '/contacts',
  Favorite: '/favorite',
  Project: '/projects/:id',
  NotFound: '*',
  Projects: '/projects',
} as const

export type AppRoute = typeof AppRoute[keyof typeof AppRoute]

export const skills = [
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Vite",
  "REST / Fetch / Axios",
  "Unit testing"
];

export const links = [
  { label: "GitHub", href: "https://github.com/Vladimir-456" },
  { label: "Telegram", href: "https://t.me/Vladimir_js_Dev" },
];