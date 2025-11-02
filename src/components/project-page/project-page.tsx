import { useParams } from "react-router-dom"
import type { Project } from "../../types/project";
type Props = {
    projects: Project[];
}
const ProjectPage = ({ projects }: Props) => {
    const { id } = useParams<{ id: string }>();
    console.log(id);
    console.log(projects);
    const project = projects.find(p => p.id === id);
    console.log(project);
    
    if (!project) {
        return <div className="container mx-auto px-4 text-2xl">Проект не найден</div>;
    }
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-purple-500 text-left mt-4 drop-shadow-lg">{project.title}</h1>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg text-left">{project.description}</p>
            <h2 className="text-3xl font-semibold mb-4 text-cyan-400 border-b-2 border-cyan-600 pb-2 text-left mt-4 ">Технологии</h2>
            <ul className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                    <li className="bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium  cursor-default transition hover:bg-cyan-500" key={index}>{tech}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-semibold mb-2 text-white mt-4">Демонстрация</h2>
      <div className="flex gap-5 mt-7 mb-7 overflow-x-auto">
        {project.screenshots.map((screenshot, index) => (
            <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="w-1/3 rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105"
            />
        ))}
      </div>
      {/* <a
        href="https://live-demo-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mb-4"
      >
        Посмотреть живую версию
      </a> */}

      {/* <h2 className="text-2xl font-semibold mb-2">Моя роль</h2> */}
      {/* <p className="mb-4">
        Здесь рассказываю, какая часть проекта моя, с какими задачами столкнулся.
      </p> */}

      {/* Ссылки */}
      <h2 className="text-2xl font-semibold mb-2 text-cyan-400 text-left">Ссылки</h2>
      <ul className="mb-4 mt-4 flex">
        <li>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            GitHub
          </a>
        </li>
        {/* <li>
          <a
            href="https://live-demo-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Живая версия
          </a>
        </li> */}
      </ul>
        </div>
    )
}

export default ProjectPage