import React from 'react';
import { Handle, Position } from 'reactflow';
import { SkillNodeProps } from '../types';
import './SkillNode.css';

const SkillNodeComponent: React.FC<SkillNodeProps> = ({ data, onNodeClick, targetPosition }) => {
  const handleNodeClick = () => {
    if (onNodeClick) {
      onNodeClick(data);
    }
  };

  return (
    <div 
      className="skill-node" 
      onClick={handleNodeClick}
      role="button"
      tabIndex={0}
      data-proficiency={data.proficiencyLevel}
      aria-label={`${data.label} skill - ${data.category} category, ${data.yearsExperience} years experience. Click for details.`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleNodeClick();
        }
      }}
    >
      {targetPosition === Position.Bottom ? (
        <Handle type="target" position={Position.Bottom} />
      ) : (
        <Handle type="target" position={Position.Top} />
      )}
      <div className="skill-node-content">
        <div className="skill-node-header">
          <h3>{data.label}</h3>
        </div>
        <div className="skill-node-body">
          <span className="skill-category" aria-label={`Category: ${data.category}`}>
            {data.category}
          </span>
          <div className="skill-experience">
            <span aria-label={`Experience: ${data.yearsExperience} ${data.yearsExperience === 1 ? 'year' : 'years'}`}>
              {data.yearsExperience} {data.yearsExperience === 1 ? 'year' : 'years'}
            </span>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default SkillNodeComponent; 