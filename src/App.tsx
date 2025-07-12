import React from 'react';
import './App.css';
import SkillsFlow from './components/SkillsFlow';

function App() {
  return (
    <div className="app-galaxy">
      <div className="universe-container visible">
        <SkillsFlow />
      </div>
      
      <div className="galaxy-background">
        <div className="stars-layer-1"></div>
        <div className="stars-layer-2"></div>
        <div className="nebula-layer"></div>
      </div>
    </div>
  );
}

export default App;
