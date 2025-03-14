"use client";
import { projectsData } from "../../data/project/data";
import { Project } from "../../types/project/type";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleOpenModal = (id: number): void => {
    setSelectedProject(id);
  };

  const handleCloseModal = (): void => {
    setSelectedProject(null);
  };

  const handleNextProject = (): void => {
    const currentIndex = projectsData.findIndex(
      (project) => project.id === selectedProject
    );

    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % projectsData.length;
    setSelectedProject(projectsData[nextIndex].id);
  };

  const handlePrevProject = (): void => {
    const currentIndex = projectsData.findIndex(
      (project) => project.id === selectedProject
    );

    if (currentIndex === -1) {
      return;
    }

    const prevIndex =
      (currentIndex - 1 + projectsData.length) % projectsData.length;
    setSelectedProject(projectsData[prevIndex].id);
  };

  return (
    <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projectsData.map((project) => (
          <button
            onClick={() => handleOpenModal(project.id)}
            key={project.id}
            className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500/50 transition-colors hover:shadow-sm text-left"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
      {selectedProject !== null && (
        <ProjectModal
          project={
            projectsData.find(
              (project) => project.id === selectedProject
            ) as Project
          }
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  );
};

export default ProjectSection;
