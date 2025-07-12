import React, { useCallback, memo, useEffect, useRef } from 'react';
import { SkillNode } from '../types';
import './SkillDetailsModal.css';

interface SkillDetailsModalProps {
  skill: SkillNode['data'];
  onClose: () => void;
}

const SkillDetailsModalComponent: React.FC<SkillDetailsModalProps> = ({ skill, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleModalClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="skill-modal" onClick={handleModalClick} ref={modalRef}>
        <button className="close-button" onClick={onClose} aria-label="Close">×</button>
        
        <div className="skill-modal-header">
          <h2>{skill.label}</h2>
          <div className="skill-category-badge">{skill.category}</div>
        </div>
        
        <div className="skill-modal-content">
          <div className="skill-details">
            <div className="skill-experience-info">
              <h4>Experience</h4>
              <p>{skill.yearsExperience} {skill.yearsExperience === 1 ? 'year' : 'years'}</p>
            </div>
            
            <div className="skill-description">
              <h4>Description</h4>
              <p>{skill.description}</p>
            </div>
          </div>
          
          <div className="skill-projects">
            <h3>Related Projects</h3>
            {skill.projects.length > 0 ? (
              <div className="projects-list">
                {skill.projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="project-links">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-link"
                        title={`View ${project.title} on GitHub`}
                        aria-label={`View ${project.title} project on GitHub (opens in new tab)`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View on GitHub
                      </a>
                      {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="demo-link"
                          title={`View ${project.title} demo`}
                          aria-label={`View ${project.title} live demo (opens in new tab)`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No projects available for this skill.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillDetailsModal = memo(SkillDetailsModalComponent);

export default SkillDetailsModal; 