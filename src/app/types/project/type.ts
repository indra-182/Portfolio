type Project = {
  id: number;
  title: string;
  tags: string[];
  description: string;
  fullDescription: string;
  image: string;
  techStack: string[];
};

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export type { Project, ProjectModalProps };
