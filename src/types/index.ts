// Centralized type definitions
import type { Position, NodeProps } from 'reactflow';

export interface Project {
  title: string;
  description: string;
  githubLink: string;
  technologies?: string[];
  demoLink?: string;
}

export interface SkillData {
  label: string;
  category: 'Programming' | 'Database' | 'Visualization' | 'AI/ML' | 'Statistics' | 'Data Engineering';
  description: string;
  proficiencyLevel: 1 | 2 | 3 | 4 | 5;
  yearsExperience: number;
  projects: Project[];
  technologies?: string[];
  certifications?: string[];
}

export interface SkillNode {
  id: string;
  type: 'skillNode';
  position: { x: number; y: number };
  data: SkillData;
  targetPosition?: Position;
  sourcePosition?: Position;
}

export interface SkillEdge {
  id: string;
  source: string;
  target: string;
  sourcePosition?: Position;
  targetPosition?: Position;
}

export interface SkillNodeProps extends NodeProps<SkillNode['data']> {
  onNodeClick?: (data: SkillNode['data']) => void;
}

export type ProficiencyLevel = 1 | 2 | 3 | 4 | 5;
export type SkillCategory = SkillData['category'];

// Theme configuration
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
} 