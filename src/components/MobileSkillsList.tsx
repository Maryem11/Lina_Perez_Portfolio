import React, { useState } from 'react';
import { initialNodes } from '../data/skillsData';
import { SkillData } from '../types';
import SkillDetailsModal from './SkillDetailsModal';
import './MobileSkillsList.css';

const MobileSkillsList: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillData | null>(null);

  const handleSkillClick = (skillData: SkillData) => {
    setActiveSkill(skillData);
  };

  const handleCloseModal = () => {
    setActiveSkill(null);
  };

  // Sort skills by years of experience (descending)
  const sortedSkills = [...initialNodes].sort((a, b) => b.data.yearsExperience - a.data.yearsExperience);

  return (
    <div className="mobile-skills-container">
      <div className="mobile-skills-header">
        <div className="mobile-header-content">
          <div className="mobile-name-section">
            <h1>Lina Perez-Romero</h1>
            <p>Business Analytics Graduate • Data Enthusiast • Adventure Seeker</p>
          </div>
          <a 
            href="https://github.com/Maryem11" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-github-link"
            title="View GitHub Profile"
          >
            <svg 
              viewBox="0 0 24 24" 
              width="24" 
              height="24" 
              fill="currentColor"
              className="mobile-github-icon"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="mobile-info-section">
        <div className="mobile-info-card">
          <h3>🎓 Education & Experience</h3>
          <p>MS in Business Analytics from San Francisco State University. 5+ years of experience in data analysis, business intelligence, and predictive modeling across finance, healthcare and e-commerce domains.</p>
        </div>
        
        <div className="mobile-info-card">
          <h3>💼 Professional Focus</h3>
          <p><strong>Specializations:</strong> Machine Learning • Business Intelligence • Data Visualization • Predictive Analytics</p>
        </div>
        
        <div className="mobile-info-card">
          <h3>🌍 Background</h3>
          <p>Originally from Colombia 🇨🇴, bringing diverse perspectives and cultural adaptability to data-driven problem solving and international business contexts.</p>
        </div>
        
        <div className="mobile-info-card">
          <h3>🚀 Current Goals</h3>
          <p>Seeking Data Scientist/Data Analyst opportunities to apply machine learning and analytics expertise in solving complex business challenges.</p>
        </div>
      </div>

      <div className="mobile-skills-section">
        <h2 className="mobile-skills-title">Technical Skills & Expertise</h2>
        <div className="mobile-skills-grid">
          {sortedSkills.map((node) => (
            <div 
              key={node.id}
              className="mobile-skill-card"
              onClick={() => handleSkillClick(node.data)}
              data-proficiency={node.data.proficiencyLevel}
            >
              <div className="mobile-skill-header">
                <h3>{node.data.label}</h3>
                <div className="mobile-skill-category">{node.data.category}</div>
              </div>
              
              <div className="mobile-skill-content">
                <div className="mobile-skill-experience">
                  <span className="experience-years">{node.data.yearsExperience}</span>
                  <span className="experience-label">
                    {node.data.yearsExperience === 1 ? 'year' : 'years'}
                  </span>
                </div>
                
                <div className="mobile-skill-proficiency">
                  <div className="proficiency-bar">
                    <div 
                      className="proficiency-fill"
                      style={{ width: `${(node.data.proficiencyLevel / 5) * 100}%` }}
                    />
                  </div>
                  <span className="proficiency-level">{node.data.proficiencyLevel}/5</span>
                </div>
              </div>
              
              <div className="mobile-skill-description">
                {node.data.description.substring(0, 120)}...
              </div>
              
              <div className="mobile-skill-projects">
                <span className="projects-count">
                  {node.data.projects.length} {node.data.projects.length === 1 ? 'project' : 'projects'}
                </span>
                <span className="tap-hint">Tap to explore</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {activeSkill && (
        <SkillDetailsModal 
          skill={activeSkill} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default MobileSkillsList; 
