export interface Project {
  title: string;
  link: string;
  tag: string;
  summary: string;
}

export interface SkillData {
  id: string;
  label: string;
  category:
    | "Programming"
    | "Database"
    | "Visualization"
    | "AI/ML"
    | "Statistics"
    | "Data Engineering";
  description: string;
  projects: Project[];
}
