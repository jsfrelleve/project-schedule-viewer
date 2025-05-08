
import React from "react";

interface Relationship {
  id: string;
  name: string;
  type: string;
  lag: string;
}

const RelationshipsTab = () => {
  const predecessors: Relationship[] = [
    { id: "EC1500", name: "Install HVAC Ducts", type: "SS", lag: "4d" }
  ];

  const successors: Relationship[] = [
    { id: "EC1640", name: "Install Wiring and Cable", type: "SS", lag: "5d" }
  ];

  return (
    <div className="h-full">
      <div className="flex h-full">
        {/* Predecessors */}
        <div className="flex-1 border-r border-gray-300">
          <div className="flex items-center justify-between p-2 border-b border-gray-300 bg-gray-100">
            <div className="text-sm font-medium">Predecessors</div>
            <div className="flex">
              <button className="text-xs border border-gray-300 rounded px-2 py-1 bg-white">
                Assign...
              </button>
              <button className="ml-1 text-xs border border-gray-300 rounded w-8 h-7 flex items-center justify-center bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Headers */}
          <div className="flex border-b border-gray-300 bg-gray-50 text-xs font-medium">
            <div className="w-20 p-2 border-r border-gray-300">ID</div>
            <div className="flex-1 p-2 border-r border-gray-300">Name</div>
            <div className="w-24 p-2 border-r border-gray-300">Relationship Type</div>
            <div className="w-16 p-2">Lag</div>
          </div>
          
          {/* Data rows */}
          {predecessors.map((pred) => (
            <div key={pred.id} className="flex border-b border-gray-200 hover:bg-blue-50">
              <div className="w-20 p-2 border-r border-gray-300 text-xs flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                </svg>
                {pred.id}
              </div>
              <div className="flex-1 p-2 border-r border-gray-300 text-xs">{pred.name}</div>
              <div className="w-24 p-2 border-r border-gray-300 text-xs">{pred.type}</div>
              <div className="w-16 p-2 text-xs">{pred.lag}</div>
            </div>
          ))}
          
          <div className="p-2 text-xs text-gray-600">Total: 1</div>
        </div>
        
        {/* Successors */}
        <div className="flex-1">
          <div className="flex items-center justify-between p-2 border-b border-gray-300 bg-gray-100">
            <div className="text-sm font-medium">Successors</div>
            <div className="flex">
              <button className="text-xs border border-gray-300 rounded px-2 py-1 bg-white">
                Assign...
              </button>
              <button className="ml-1 text-xs border border-gray-300 rounded w-8 h-7 flex items-center justify-center bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Headers */}
          <div className="flex border-b border-gray-300 bg-gray-50 text-xs font-medium">
            <div className="w-20 p-2 border-r border-gray-300">ID</div>
            <div className="flex-1 p-2 border-r border-gray-300">Name</div>
            <div className="w-24 p-2 border-r border-gray-300">Relationship Type</div>
            <div className="w-16 p-2">Lag</div>
          </div>
          
          {/* Data rows */}
          {successors.map((succ) => (
            <div key={succ.id} className="flex border-b border-gray-200 hover:bg-blue-50">
              <div className="w-20 p-2 border-r border-gray-300 text-xs flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                </svg>
                {succ.id}
              </div>
              <div className="flex-1 p-2 border-r border-gray-300 text-xs">{succ.name}</div>
              <div className="w-24 p-2 border-r border-gray-300 text-xs">{succ.type}</div>
              <div className="w-16 p-2 text-xs">{succ.lag}</div>
            </div>
          ))}
          
          <div className="p-2 text-xs text-gray-600">Total: 1</div>
        </div>
      </div>
    </div>
  );
};

export default RelationshipsTab;
