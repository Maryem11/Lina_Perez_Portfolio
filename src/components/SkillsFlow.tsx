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
  const { fitView, setViewport, getViewport } = useReactFlow();
  
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
          <h1>Lina Perez-Romero</h1>
          <p>Business Analytics Graduate • Data Enthusiast • Adventure Seeker</p>
        </div>
        
        <div className="skills-flow-wrapper">
          <ReactFlowProvider>
            <FlowWithProvider />
          </ReactFlowProvider>
          
          <div className="floating-info-card top-left">
            <div className="card-header">🎓 Education & Experience</div>
            <div className="card-content">
              MS in Business Analytics from San Francisco State University. 11+ years of experience in data analysis, business intelligence, and predictive modeling across healthcare and e-commerce domains.
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