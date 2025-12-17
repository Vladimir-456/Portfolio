import Modal from "../modal/modal";
import ProjectCard, {
  type ProjectCardProps,
} from "../project-card/project-card";
import { useEffect, useMemo, useState } from "react";
import Filters from "../filters/filters";
import { filters } from "../../const";
import useDebounce from "../../hooks/useDebounce";
import { useAppSelector } from "../../hooks";
import {
  selectCurrentFilter,
  selectCurrentProject,
  selectItems,
} from "../../app/app/selectors";
// import { useGetUserReposQuery } from "../../services/api";

export default function Projects() {
  const items = useAppSelector(selectItems);
  const activeFilter = useAppSelector(selectCurrentFilter);
  const currentProject = useAppSelector(selectCurrentProject);

  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [galleryItems, setGalleryItems] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 400);

  const filteredProjects = useMemo(() => {
    const lowerSearch = debounceSearch.toLowerCase();
    return filteredItems.filter(
      (project) =>
        project.title.toLowerCase().includes(lowerSearch) ||
        project.description.toLowerCase().includes(lowerSearch) ||
        project.technologies?.some((tech) =>
          tech.toLowerCase().includes(lowerSearch)
        )
    );
  }, [filteredItems, debounceSearch]);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredItems(items);
    } else {
      setFilteredItems(filters[activeFilter]);
    }
  }, [activeFilter, items]);

  const openModal = (project: ProjectCardProps, index: number) => {
    setIsOpen(true);
    setGalleryItems(project.screenshots || []);
    setStartIndex(index);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section
      id="projects"
      className="container mx-auto mt-5 px-3 py-3 md:px-3 md:py-0"
    >
      <h2 className="text-3xl md:text-4xl  font-bold mb-5 bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Мои проекты
      </h2>
      <div className="">
        <input
          type="text"
          className="
      md:mb-4 md:mt-3 mb-3 mt-1
      md:w-1/2 md:p-2 w-full p-2
      placeholder:text-gray-600
      border text-white 
      bg-gray-900 border-pink-500
      rounded-md 
      focus:outline-none focus:border-indigo-500"
          placeholder="Поиск проектов..."
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
        />
      </div>
      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute translate-x-1/3 translate-y-5 transform -translate-y-1/2 -translate-x-6 text-gray-500 hover:text-gray-700"
          aria-label="Очистить поиск"
        >
          ×
        </button>
      )}
      <Filters />
      <div className="grid md:gap-7 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProjects?.map((p) => (
          <ProjectCard
            key={p.id}
            {...p}
            onOpenGallery={() => openModal(p, 0)}
            type="main"
          />
        ))}
      </div>
      <Modal
        items={galleryItems}
        isOpen={isOpen}
        initialIndex={startIndex}
        onClose={closeModal}
        projectInfo={currentProject}
      />
    </section>
  );
}
