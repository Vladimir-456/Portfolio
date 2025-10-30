import { useSearchParams } from "react-router-dom";
import Modal from "../modal/modal";
import ProjectCard from "../project-card/project-card"
import { useEffect, useMemo, useState } from "react";
import Filters from "../filters/filters";
import { filters } from "../../const";
import useDebounce from "../../hooks/useDebounce";
import { toggleClickFavorite } from "../../app/favorite/favoriteSlice";

export type ProjectCardProps = {
    id: string
    title: string
    description: string
    imageUrl?: string
    favoriteIconUrl?: string
    screenshots?: string[]
    technologies?: string[]
    href?: string
    isFavorite?: boolean
}

type Props = { items: ProjectCardProps[] };

export default function Projects({ items }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [galleryItems, setGalleryItems] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(items);
  const [search, setSearch] = useState('');
  // const toggleClickFavorite = useFavoriteStore(state => state.toggleClickFavorite); 
  const [currentProject, setCurrentProject] = useState<ProjectCardProps | null>(null);
  const debounceSearch = useDebounce(search, 400);

  const filteredProjects = useMemo(() => {
    const lowerSearch = debounceSearch.toLowerCase();
    return filteredItems.filter(project =>
      project.title.toLowerCase().includes(lowerSearch) ||
      project.description.toLowerCase().includes(lowerSearch) ||
      project.technologies?.some(tech => tech.toLowerCase().includes(lowerSearch))
    );
  }, [filteredItems, debounceSearch]);  


 useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(items);
    } else {
      setFilteredItems(filters[activeFilter]); 
    }
  }, [activeFilter, items]);

  const openModal = (project: ProjectCardProps, index: number) => {
    const next = new URLSearchParams(searchParams);
    next.set("modal", String(index));
    setSearchParams(next);
    setIsOpen(true);
    setGalleryItems(project.screenshots || []);
    setStartIndex(index);
    setCurrentProject(project);
    console.log(currentProject); 
  }

  const handleClickFavorite = (evt: React.MouseEvent<HTMLImageElement>, id: string) => {
    evt.stopPropagation();
    toggleClickFavorite(id);
  };


  const closeModal = () => {
    const next = new URLSearchParams(searchParams);
    next.delete("modal");
    setSearchParams(next);
    setIsOpen(false);
  }
  return (
    <section id="projects" className="container mx-auto px-3 py-4 md:px-4 md:py-1">
      <h2 className=" text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Мои проекты
      </h2>
      <input 
      type="text"
      className="
      md:mb-4 md:mt-3 mb-3 mt-1
      md:w-1/2 md:p-2 w-full p-2
      border text-white 
      bg-gray-900 border-gray-300 
      rounded-md 
      focus:outline-none focus:border-indigo-500" 
      placeholder="Поиск проектов..."
      value={search}
      onChange={(evt) => setSearch(evt.target.value)}
      />
      {search && (
           <button
          onClick={() => setSearch('')}
          className="absolute translate-x-1/3 translate-y-5 transform -translate-y-1/2 -translate-x-6 text-gray-500 hover:text-gray-700"
          aria-label="Очистить поиск"
        >
          ×
        </button>
      )}
       <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
      <div className="grid md:gap-6 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProjects?.map((p) => (
          <ProjectCard 
          key={p.id} {...p} 
          onOpenGallery={() => openModal(p, 0)} 
          onClickFavorite={handleClickFavorite} 
          type="main" />
        ))}
      </div>
      <Modal items={galleryItems} isOpen={isOpen} initialIndex={startIndex} onClose={closeModal} projectInfo={currentProject} />
    </section>
  );
}