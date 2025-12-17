import { useEffect, useState } from "react";
import type { Project } from "../../types/project";

type ModalProps = {
  items: string[];
  projectInfo?: Project;
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
};
const Modal = (props: ModalProps) => {
  const [index, setIndex] = useState(props.initialIndex || 0);
  const { items, isOpen, initialIndex, onClose, projectInfo } = props;
  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIndex(initialIndex || 0);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen || items.length === 0) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-6 overflow-y-auto bg-black/75">
      {/* Фон, закрывающий окно при клике */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Само модальное окно */}
      <div className="relative max-w-3xl w-full mx-auto p-6 bg-gray-900 rounded-lg overflow-auto flex flex-col gap-3">
        <div className="flex flex-col justify-start items">
          {/* Описание проекта */}
          <div className="flex flex-row gap-2 text-gray-300">
            {projectInfo && (
              <div className="p-4">
                <h3 className="text-3xl text-left  font-extrabold mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {projectInfo.title}
                </h3>
                <p className="text-left leading-relaxed mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {projectInfo.description}
                </p>
                <div className="flex items-center mb-5 gap-0">
                  <strong className="font-semibold block  text-gray-400">
                    Стек:
                  </strong>
                  <ul className="list-none ml-4 flex  list-disc list-inside  text-gray-400">
                    {projectInfo.technologies?.map((tech) => (
                      <li
                        className="text-sm ml-2 bg-black rounded-lg px-2 py-2 bg-black hover:bg-gray-600 transition duration-300 ease-in-out"
                        key={tech}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <img
              src={items[index]}
              alt={`Screenshot ${index + 1}`}
              className="w-full object-fit rounded shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out"
              loading="lazy"
            />
            <div className="flex items-center justify-between w-full mt-3 px-2 text-gray-300">
              <button
                onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                disabled={index === 0}
                className="px-2 py-1 rounded bg-white/10 disabled:bg-gray-600 hover:bg-white/20 transition disabled:cursor-not-allowed"
              >
                Prev
              </button>
              <span>
                {index + 1} / {items.length}
              </span>
              <button
                onClick={() =>
                  setIndex((i) => Math.min(i + 1, items.length - 1))
                }
                disabled={index === items.length - 1}
                className="px-2 py-1 rounded bg-white/10 disabled:bg-gray-600 hover:bg-white/20 transition disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Кнопка закрытия */}
        <button
          className="absolute top-5 right-5 z-10 text-white px-3 py-1 rounded-full bg-black/60 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
