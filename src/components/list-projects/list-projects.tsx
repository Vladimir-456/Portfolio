import type { ProjectCardProps } from "../projects/projects"

type ListProjectsProps = {
    items: ProjectCardProps[]
}

const ListProjects = ({ items } : ListProjectsProps) => {
    console.log(items);
    
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Проекты</h1>\
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">Список моих проектов</p>
            {/* <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {items.map((item, index) => <ProjectCard key={index} {...item} />)}
            </div> */}
        </div>
    )
}

export default ListProjects