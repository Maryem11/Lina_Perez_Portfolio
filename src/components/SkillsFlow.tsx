import React, { useState, useCallback, useMemo, useEffect } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  NodeTypes,
  ReactFlowProvider,
  BackgroundVariant,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { initialNodes, initialEdges } from '../data/skillsData';
import { SkillNode as SkillNodeType } from '../types';
import SkillNode from './SkillNode';
import SkillDetailsModal from './SkillDetailsModal';
import MobileSkillsList from './MobileSkillsList';
import './SkillsFlow.css';

const FlowWithProvider: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillNodeType['data'] | null>(null);
  const { fitView } = useReactFlow();
  
  const nodeTypes = useMemo<NodeTypes>(() => ({
    skillNode: (props) => (
      <SkillNode 
        {...props} 
        onNodeClick={() => setActiveSkill(props.data)}
      />
    ),
  }), []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    initialEdges.map(edge => ({
      ...edge,
      style: { 
        stroke: 'rgba(121, 85, 72, 0.8)', 
        strokeWidth: 3,
        filter: 'drop-shadow(0 0 4px rgba(62, 39, 35, 0.6))'
      },
    }))
  );

  // Use fitView for robust centering and zoom only, no manual nudge
  const fitAndCenter = useCallback(() => {
    fitView({ padding:-0.3, duration: 800 });
  }, [fitView]);

  useEffect(() => {
    fitAndCenter();
    const handleResize = () => {
      fitAndCenter();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [nodes, fitAndCenter]);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge({
      ...params,
      style: { 
        stroke: 'rgba(121, 85, 72, 0.8)', 
        strokeWidth: 3,
        filter: 'drop-shadow(0 0 4px rgba(62, 39, 35, 0.6))'
      },
    }, eds)),
    [setEdges]
  );

  const handleCloseModal = useCallback(() => {
    setActiveSkill(null);
  }, []);

  // Reset view to fit all nodes
  const handleResetView = useCallback(() => {
    setNodes(initialNodes);
    setTimeout(() => {
      fitAndCenter();
    }, 100);
  }, [setNodes, fitAndCenter]);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        minZoom={0.2}
        maxZoom={1.5}
        fitView={false}
        fitViewOptions={{ padding: 0.05 }}
      >
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={20} 
          size={1}
          color="rgba(76, 175, 80, 0.15)" 
        />
      </ReactFlow>
      
      <button 
        className="reset-view-button"
        onClick={handleResetView}
        title="Reset to Default Position"
      >
        🔁
      </button>
      
      {activeSkill && (
        <SkillDetailsModal 
          skill={activeSkill} 
          onClose={handleCloseModal} 
        />
      )}
    </>
  );
};

const SkillsFlow: React.FC = () => {
  return (
    <div className="skills-flow-container">
      {/* Desktop version */}
      <div className="desktop-skills-flow">
        <div className="skills-flow-header">
          <div className="header-content">
            <div className="name-section">
              <h1>Lina Perez-Romero</h1>
              <p>Business Analytics Graduate • Data Enthusiast • Adventure Seeker</p>
            </div>
            <a 
              href="https://github.com/Maryem11" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
              title="View GitHub Profile"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                fill="currentColor"
                className="github-icon"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="skills-flow-wrapper">
          <ReactFlowProvider>
            <FlowWithProvider />
          </ReactFlowProvider>
          
          <div className="floating-info-card top-left">
            <div className="card-header">🎓 Education & Experience</div>
            <div className="card-content">
              MS in Business Analytics from San Francisco State University. 5+ years of experience in data analysis, business intelligence, and predictive modeling across finance, healthcare and e-commerce domains.
            </div>
          </div>
          
          <div className="floating-info-card top-right">
            <div className="card-header">💼 Professional Focus</div>
            <div className="card-content">
              <strong>Specializations:</strong> Machine Learning • Business Intelligence • Data Visualization • Predictive Analytics
            </div>
          </div>
          
          <div className="floating-info-card bottom-left">
            <div className="card-header">🌍 Background</div>
            <div className="card-content">
              Originally from Colombia 🇨🇴, bringing diverse perspectives and cultural adaptability to data-driven problem solving and international business contexts.
            </div>
          </div>
          
          <div className="floating-info-card bottom-right">
            <div className="card-header">🚀 Current Goals</div>
            <div className="card-content">
              Seeking Data Scientist/Data Analyst opportunities to apply machine learning and analytics expertise in solving complex business challenges.
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile version */}
      <MobileSkillsList />
    </div>
  );
};

export default SkillsFlow; 
