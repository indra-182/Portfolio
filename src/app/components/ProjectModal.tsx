import Image from "next/image";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, MouseEvent } from "react";
import { ProjectModalProps } from "../types/project/type";

export default function ProjectModal({
  project,
  onClose,
  onNext,
  onPrev,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleOutsideClick}
      ref={modalRef}
    >
      <div
        className="bg-gray-900 rounded-lg max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-12 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-3">
          <h2 className="text-2xl font-bold text-purple-50">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-purple-50 hover:text-purple-400 rounded-full
            p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="space-y-4 md:w-1/2">
            <p className="text-gray-300">{project.description}</p>
            <p className="text-gray-300">{project.fullDescription}</p>
            <div>
              <h3 className="font-semibold mb-2 text-primary-500">
                Tech Stack:
              </h3>
              <ul className="list-disc list-inside">
                {project.techStack.map((tech, index) => (
                  <li key={index} className="text-gray-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-64 w-full md:w-1/2">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-11/12 max-w-4xl">
          <button
            onClick={onPrev}
            className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-full"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={onNext}
            className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-[120%]"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
