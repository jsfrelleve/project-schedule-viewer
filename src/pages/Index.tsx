
import React, { useState } from "react";
import ProjectHeader from "../components/ProjectHeader";
import Toolbar from "../components/Toolbar";
import GanttView from "../components/GanttView";
import RelationshipsTab from "../components/RelationshipsTab";
import CollapsibleScheduleHealth from "../components/CollapsibleScheduleHealth";
import ChatButton from "../components/Chat/ChatButton";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Relationships");
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Project Header */}
      <ProjectHeader />
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-16 bg-[#343a40] text-white flex flex-col items-center py-4 space-y-6">
          {/* Sidebar Icons */}
          <div className="w-10 h-10 bg-gray-600 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 9h18" />
            </svg>
          </div>
          <div className="w-10 h-10 bg-gray-600 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3" />
              <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
              <path d="M3 16v3a2 2 0 0 0 2 2h3" />
              <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
            </svg>
          </div>
          <div className="w-10 h-10 bg-[#4b7bec] rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <line x1="9" x2="15" y1="9" y2="9" />
              <line x1="9" x2="15" y1="15" y2="15" />
            </svg>
          </div>
          <div className="w-10 h-10 bg-gray-600 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
          </div>
          <div className="w-10 h-10 bg-gray-600 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </svg>
          </div>
          <div className="w-10 h-10 bg-gray-600 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
        </div>

        {/* Main area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Toolbar */}
          <Toolbar />

          {/* Main content area */}
          <div className="flex flex-1 overflow-hidden">
            {/* Gantt chart main section */}
            <div className="flex-1 overflow-hidden border-r border-gray-300">
              <GanttView />
            </div>

            {/* Health metrics panel - Now collapsible */}
            <CollapsibleScheduleHealth />
          </div>

          {/* Bottom tab area */}
          <div className="h-64 border-t border-gray-300 bg-white">
            <div className="border-b border-gray-300">
              <div className="flex">
                <button className="px-4 py-2 text-sm border-r border-gray-300">Activity Details</button>
                <button className="px-4 py-2 text-sm border-r border-gray-300">General</button>
                <button className="px-4 py-2 text-sm border-r border-gray-300">Status</button>
                <button className="px-4 py-2 text-sm border-r border-gray-300">Resource Assignments</button>
                <button 
                  className={`px-4 py-2 text-sm border-r border-gray-300 ${activeTab === "Relationships" ? "bg-blue-500 text-white" : ""}`}
                  onClick={() => setActiveTab("Relationships")}
                >
                  Relationships
                </button>
                <button className="px-4 py-2 text-sm border-r border-gray-300">Codes</button>
                <button className="px-4 py-2 text-sm border-r border-gray-300">Trace Logic</button>
              </div>
            </div>
            
            {/* Tab content */}
            {activeTab === "Relationships" && <RelationshipsTab />}
          </div>
        </div>
      </div>
      
      {/* Floating chat button */}
      <ChatButton />
    </div>
  );
};

export default Index;
