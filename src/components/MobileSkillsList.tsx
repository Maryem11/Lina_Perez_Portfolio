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
        <h1>Lina Perez-Romero</h1>
        <p>Business Analytics Graduate • Data Enthusiast • Adventure Seeker</p>
      </div>
      
      <div className="mobile-info-section">
        <div className="mobile-info-card">
          <h3>🎓 Education & Experience</h3>
          <p>MS in Business Analytics from San Francisco State University. 11+ years of experience in data analysis, business intelligence, and predictive modeling across healthcare and e-commerce domains.</p>
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