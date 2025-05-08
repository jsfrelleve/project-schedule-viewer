
import React from "react";

const Toolbar = () => {
  return (
    <div className="bg-white border-b border-gray-300">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <div className="text-sm font-medium mr-4">Activities</div>
          <button className="flex items-center text-xs bg-gray-100 border border-gray-300 rounded px-2 py-1 mr-2">
            Actions
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <button className="flex items-center text-xs bg-gray-100 border border-gray-300 rounded px-2 py-1 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            Add
          </button>
          <button className="flex items-center text-xs bg-gray-100 border border-gray-300 rounded px-2 py-1 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Schedule...
          </button>
          <button className="text-xs bg-gray-100 border border-gray-300 rounded w-8 h-7 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center text-xs bg-white border border-gray-300 rounded">
            <span className="px-2 py-1">Open:</span>
            <div className="flex items-center border-l border-gray-300 px-3 py-1">
              <span>Current Schedule</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center text-xs bg-white border border-gray-300 rounded">
            <span className="px-2 py-1">View:</span>
            <div className="flex items-center border-l border-gray-300 px-3 py-1">
              <span>Classic Schedule View</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center text-xs bg-white border border-gray-300 rounded">
            <span className="px-2 py-1">Layout</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          
          <button className="text-xs bg-white border border-gray-300 rounded w-8 h-7 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          
          <button className="text-xs bg-white border border-gray-300 rounded w-8 h-7 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v14" />
              <rect width="16" height="6" x="4" y="17" rx="2" />
            </svg>
          </button>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="text-xs bg-white border border-gray-300 rounded px-2 py-1 w-44 pr-8"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-2 top-1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
