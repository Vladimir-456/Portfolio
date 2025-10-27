import { useEffect, useState } from "react"
import type { ProjectCardProps } from "../projects/projects"

type ModalProps = {
    items: string[]
    projectInfo?: ProjectCardProps | null;
    isOpen: boolean
    initialIndex?: number
    onClose: () => void
}
const Modal = (props : ModalProps) => {
    const [index, setIndex] = useState(props.initialIndex || 0)
    const {items, isOpen, initialIndex, onClose, projectInfo} = props;
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        onClose()
      }
    }
   
  useEffect(() => {
        if (isOpen) {
            setIndex(initialIndex || 0)
        }
    }, [isOpen, initialIndex])

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);
      }

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
      };
      
    }, [isOpen]);


    if(!isOpen || items.length === 0) return null

  return (
  <div className="fixed inset-0 z-60 flex items-center justify-center p-6 overflow-y-auto bg-black/75">
  {/* Фон, закрывающий окно при клике */}
  <div className="absolute inset-0" onClick={onClose} />

  {/* Само модальное окно */}
  <div className="relative max-w-5xl w-full mx-auto p-6 bg-gray-900 rounded-lg overflow-auto max-h-[88vh] flex flex-col md:flex-row gap-6">
    
    {/* Описание проекта */}
    <div className="md:flex-1 text-gray-300">
      {projectInfo && (
        <div>
          <h3 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {projectInfo.title}
          </h3>
          <p className="text-base leading-relaxed mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {projectInfo.description}
          </p>
          <div className="mb-4">
            <strong className="font-semibold block mb-2 text-gray-400">Стек:</strong>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              {projectInfo.technologies?.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>

    {/* Галерея изображений с навигацией */}
    <div className="flex flex-col items-center md:flex-1">
      <img
        src={items[index]}
        alt={`Screenshot ${index + 1}`}
        className="w-full max-h-[55vh] object-contain rounded shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out"
        loading="lazy"
      />
      <div className="flex items-center justify-between w-full mt-3 px-2 text-gray-300">
        <button
          onClick={() => setIndex(i => Math.max(i - 1, 0))}
          disabled={index === 0}
          className="px-3 py-1 rounded bg-white/10 disabled:bg-gray-600 hover:bg-white/20 transition disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <span>{index + 1} / {items.length}</span>
        <button
          onClick={() => setIndex(i => Math.min(i + 1, items.length - 1))}
          disabled={index === items.length - 1}
          className="px-3 py-1 rounded bg-white/10 disabled:bg-gray-600 hover:bg-white/20 transition disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>

    {/* Кнопка закрытия */}
    <button
      className="absolute top-4 right-4 z-10 text-white p-2 rounded-full bg-black/60 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      aria-label="Close"
      onClick={onClose}
    >
      ✕
    </button>

  </div>
</div>

);

}

export default Modal