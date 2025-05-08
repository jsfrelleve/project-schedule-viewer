
import React from "react";

const ProjectHeader = () => {
  return (
    <div className="bg-white border-b border-gray-300">
      {/* Oracle Header */}
      <div className="flex items-center px-4 py-2 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">P</div>
          <span className="text-sm text-gray-600">Oracle Primavera Professional: Haitang Corporate Park</span>
        </div>
        <div className="ml-auto flex space-x-4">
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" x2="19" y1="12" y2="12" />
            </svg>
          </button>
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
            </svg>
          </button>
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Menu Bar */}
      <div className="flex px-4 py-1 bg-gray-100 border-b border-gray-300 text-sm">
        <button className="mr-4 hover:bg-gray-200 px-1">File</button>
        <button className="mr-4 hover:bg-gray-200 px-1">Edit</button>
        <button className="mr-4 hover:bg-gray-200 px-1">View</button>
        <button className="mr-4 hover:bg-gray-200 px-1">Project</button>
        <button className="mr-4 hover:bg-gray-200 px-1">Dictionaries</button>
        <button className="mr-4 hover:bg-gray-200 px-1">Workspace</button>
        <button className="mr-4 hover:bg-gray-200 px-1">User</button>
        <button className="mr-4 hover:bg-gray-200 px-1">Help</button>
      </div>
    </div>
  );
};

export default ProjectHeader;
