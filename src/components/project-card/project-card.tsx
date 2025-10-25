import { useRef } from "react"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import { useUserStore } from "../../store/userStore"

export type ProjectCardProps = {
    id: string
    title: string
    description: string
    imageUrl?: string
    favoriteIconUrl?: string
    screenshots?: string[]
    technologies?: string[]
    href?: string
    onOpenGallery?: (items: string[], index: number) => void
    isFavorite?: boolean
    onClickFavorite: (evt: React.MouseEvent<HTMLImageElement>, id: string) => void
    type : 'main' | 'favorite'
}
const ProjectCard = (props: ProjectCardProps) => {
    const user = useUserStore((state) => state.user);
    const {
        id, 
        title, 
        description, 
        imageUrl, 
        favoriteIconUrl, 
        screenshots, 
        technologies, 
        href, 
        onOpenGallery, 
        isFavorite, 
        onClickFavorite, 
        type} = props
    const ref = useRef<HTMLDivElement | null>(null);
    const isVisible = useIntersectionObserver({ ref });

   const handleClickFavorite = (evt: React.MouseEvent<HTMLImageElement>, id: string) => {
        console.log(id);
        onClickFavorite(evt,id);
    };

    return (
        <article  onClick={() => onOpenGallery?.(screenshots || [],0)} ref={ref} className= {`rounded-xl bg-gray-900 shadow-md group transform hover:-translate-y-1 transition duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0 transition duration-900 ease-in-out' : 'opacity-0 translate-y-6'} `} >
            {type === 'main' &&
            <>
                <div className="h-48 bg-gray-100 overflow-hidden" >
                    {imageUrl ? <img  className="w-full h-full object-cover" src={imageUrl} alt={title} /> : <div></div>}
                    {favoriteIconUrl && <img className={`absolute top-2 right-2 w-6 h-6 ${isFavorite ? 'fill-red-500' : ' grayscale(0%)'}`} id = {'favorite'} src={favoriteIconUrl} alt="Избранное" onClick={(evt) => handleClickFavorite(evt, id)} />}
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-slate-300">{title}</h3>
                    <p className="mb-5 text-sm text-white mt-2">{description}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {technologies && technologies.map(technology => <span key={technology} className="text-sm px-2 py-1 rounded-full bg-gray-600 bg-opacity-100 text-gray-400 color-black">{technology}</span>)}
                    </div>
                    {href && <a className="mt-3 inline-block text-white no-underline transition duration-300 hover:text-white" href={href}>View</a>}
                    {user?.role === 'admin' && <>
                        <div className="mt-3 flex gap-3 justify-center">
                            <button className="mt-3 inline-block text-white no-underline transition duration-300 hover:text-white">Edit</button>
                            <button className="mt-3 inline-block text-white no-underline transition duration-300 hover:text-white">Delete</button>
                        </div>
                    </>}
                </div>
            </>
            }
            {type === 'favorite' && 
            <div className="h-48 bg-gray-100 overflow-hidden" >
                <h2 className="text-lg font-semibold text-slate-500 bg-gray-800 p-1">{title}</h2>
                {imageUrl ? <img  className="w-full h-full object-cover" src={imageUrl} alt={title} /> : <div></div>}
                {favoriteIconUrl && <img className={`absolute top-2 right-2 w-6 h-6 ${isFavorite ? 'fill-red-500' : ' grayscale(0%)'}`} id = {'favorite'} src={favoriteIconUrl} alt="Избранное" onClick={(evt) => handleClickFavorite(evt, id)}
                 />}
            </div>}
        </article>
    )
}

export default ProjectCard