// ProjectTabs.tsx
import React from 'react';

const ProjectTabs: React.FC = () => {
  return (
    <div className="flex space-x-4 border-b">
      <button className="font-semibold border-b-2 border-black pb-2">All Projects (3)</button>
      <button className="text-gray-500 pb-2">Stats</button>
    </div>
  );
};

export default ProjectTabs;
