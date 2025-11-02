import { useRef } from "react"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import { useUserStore } from "../../store/userStore"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../app/store"
import { toggleClickFavorite } from "../../app/favorite/favoriteSlice"
import { generatePath, Link } from "react-router-dom"
import { AppRoute } from "../../const"

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
  const dispatch = useDispatch();
  const isFavoriteFromStore = useSelector((state: RootState) => state.favorite.favoriteIds.includes(props.id));
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
    const resolvedIsFavorite = isFavorite ?? isFavoriteFromStore;

   const handleClickFavorite = (evt: React.MouseEvent<HTMLImageElement>, id: string) => {
        console.log(id);
        dispatch(toggleClickFavorite(id));
        onClickFavorite?.(evt, id)
    };

    return (
        <article
  onClick={() => onOpenGallery?.(screenshots || [], 0)}
  ref={ref}
  className={`
    relative rounded-xl bg-gray-900 shadow-md group transform 
    hover:-translate-y-1 hover:shadow-xl 
    transition duration-300 ease-in-out
    ${isVisible ? 'opacity-100 translate-y-0 duration-900' : 'opacity-0 translate-y-6'}
    cursor-pointer
    max-w-sm mx-auto
  `}
>
  {type === 'main' && (
    <>
      <div className="relative h-48 bg-gray-100 overflow-hidden rounded-t-xl">
        {imageUrl ? (
          <img 
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={title}
            loading="lazy"
          />
        ) : <div className="w-full h-full bg-gray-300" />}
        {favoriteIconUrl && (
          <img
            className={`absolute top-2 right-2 w-6 h-6 cursor-pointer ${
              resolvedIsFavorite ? 'fill-red-500 filter-none' : 'filter grayscale'
            }`}
            id="favorite"
            src={favoriteIconUrl}
            alt="Избранное"
            onClick={(evt) => {
              evt.stopPropagation();
              handleClickFavorite(evt, id);
            }}
          />
        )}
      </div>

      <div className="p-4 rounded-b-xl flex flex-col">
        <h3 className="text-lg font-semibold text-slate-300 truncate">{title}</h3>
        <p className="mt-2 mb-5 text-sm text-white line-clamp-3">{description}</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {technologies && technologies.map((tech) => (
            <span
              key={tech}
              className="text-sm px-2 py-1 rounded-full bg-gray-600 text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {href && (
          <Link
            className="mt-3 inline-block text-white no-underline transition duration-300 hover:text-cyan-400"
            to={generatePath(AppRoute.Project, { id })}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </Link>
        )}

        {user?.role === 'admin' && (
          <div className="mt-3 flex gap-3 justify-center">
            <button className="text-white hover:text-cyan-400 transition">Edit</button>
            <button className="text-white hover:text-red-500 transition">Delete</button>
          </div>
        )}
      </div>
    </>
  )}

  {type === 'favorite' && (
    <div className="relative h-48 bg-gray-100 overflow-hidden rounded-xl">
      <h2 className="text-lg font-semibold text-slate-500 bg-gray-800 p-1 absolute w-full">{title}</h2>
      {imageUrl ? (
        <img className="w-full h-full object-cover" src={imageUrl} alt={title} loading="lazy" />
      ) : (
        <div className="w-full h-full bg-gray-300" />
      )}
      {favoriteIconUrl && (
        <img
          className={`absolute top-2 right-2 w-6 h-6 cursor-pointer ${
            isFavorite ? 'fill-red-500 filter-none' : 'filter grayscale'
          }`}
          id="favorite"
          src={favoriteIconUrl}
          alt="Избранное"
          onClick={(evt) => {
            evt.stopPropagation();
            handleClickFavorite(evt, id);
          }}
        />
      )}
    </div>
  )}
</article>

    )
}

export default ProjectCard