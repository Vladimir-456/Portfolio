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
  <div className="fixed inset-0 z-60 flex items-center justify-center p-6 overflow-y-auto">
    <div className="absolute inset-0 bg-black/75" onClick={onClose} />
    <div className="relative max-w-7xl mx-auto p-4 bg-gray-900 rounded-lg overflow-auto max-h-[88vh] flex flex-col gap-6">
    <div className="md:flex-1 p-2 text-gray-900">
       {projectInfo && (
        <div className="text-gray-700">
          <h3 className="text-3xl font-extrabold mb-3 text-left mt-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{projectInfo.title}</h3>
          <p className="text-base leading-relaxed mb-4 text-left text-gray-600 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{projectInfo.description}</p>
          <div className="mb-1 text-left text-gray-600">
            <strong className="font-semibold mb-1">Стек:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 ">
              {projectInfo.technologies?.map((tech) => (
                <li  className="text-gray-600 mb-1" key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>

      <div>
        <img
          src={items[index]}
          alt={`Screenshot ${index + 1}`}
          className="w-full max-h-[55vh] object-fit bg-black rounded shadow-lg hover:shadow-2xl transition transform-rotate duration-300 ease-in-out"
          loading="lazy"
        />
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-2">
            <button
              onClick={() => setIndex(i => Math.max(i - 1, 0))}
              disabled={index === 0}
              className="px-3 py-1 rounded bg-white/10 disabled:bg-gray-600 hover:bg-white/20 transition"
            >
              Prev
            </button>
            <button
              onClick={() => setIndex(i => Math.min(i + 1, items.length - 1))}
              disabled={index === items.length - 1}
              className="px-3 py-1 rounded bg-white/10 disabled:bg-gray-600 hover:bg-white/20 transition"
            >
              Next
            </button>
          </div>
          <div>{index + 1} / {items.length}</div>
        </div>
      </div>

      <button
        className="absolute top-2 right-3 z-10 text-white p-2 rounded-full bg-black/60 hover:bg-gray-500"
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