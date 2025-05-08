
import React from "react";

interface HealthMetric {
  name: string;
  percentage: string;
  count: number;
  showChevron: boolean;
}

const ScheduleHealth = () => {
  const metrics: HealthMetric[] = [
    { name: "Open Ends", percentage: "7%", count: 5, showChevron: true },
    { name: "Dangling Start", percentage: "0%", count: 0, showChevron: true },
    { name: "Dangling Finish", percentage: "1%", count: 1, showChevron: true },
    { name: "Predecessor Negative Lag", percentage: "0%", count: 0, showChevron: true },
    { name: "Predecessor Lag", percentage: "10%", count: 7, showChevron: true },
    { name: "FS Predecessor", percentage: "76%", count: 53, showChevron: true },
    { name: "SS Predecessor", percentage: "18%", count: 13, showChevron: true },
    { name: "FF Predecessor", percentage: "10%", count: 7, showChevron: true },
    { name: "SF Predecessor", percentage: "0%", count: 0, showChevron: true },
    { name: "Hard Constraint", percentage: "0%", count: 0, showChevron: true },
    { name: "Soft Constraint", percentage: "0%", count: 0, showChevron: true },
    { name: "Invalid Progress Date", percentage: "0%", count: 0, showChevron: true },
    { name: "Late Activity", percentage: "0%", count: 0, showChevron: true },
    { name: "Large Float", percentage: "31%", count: 22, showChevron: true },
    { name: "Negative Float", percentage: "0%", count: 0, showChevron: true },
    { name: "Large Duration", percentage: "7%", count: 5, showChevron: true },
    { name: "No Roles or Resources", percentage: "6%", count: 4, showChevron: true },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center">
          {/* Circular progress - 93% */}
          <div className="relative w-12 h-12 mr-4">
            <svg viewBox="0 0 36 36" className="w-12 h-12">
              <path
                className="stroke-current text-gray-200"
                fill="none"
                strokeWidth="3"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="stroke-current text-red-500"
                fill="none"
                strokeWidth="3"
                strokeDasharray="100, 100"
                strokeDashoffset="7"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="text-5xs font-semibold fill-current text-gray-700" textAnchor="middle">93%</text>
            </svg>
          </div>
          <div>
            <div className="text-lg font-medium">Schedule Health Score</div>
          </div>
        </div>
        <div className="flex items-center">
          <button className="text-gray-500 hover:text-gray-700 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Metrics list */}
      <div className="flex-1 overflow-y-auto">
        <div className="h-full">
          {metrics.map((metric, index) => (
            <div 
              key={metric.name}
              className={`flex items-center justify-between py-3 px-4 border-b border-gray-200 hover:bg-gray-50 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="flex-1">
                <div className="text-sm">{metric.name}</div>
              </div>
              
              <div className="w-16 text-right text-sm">{metric.percentage}</div>
              
              {metric.count > 0 ? (
                <div className="w-8 h-8 ml-2 rounded-full bg-gray-500 text-white flex items-center justify-center text-xs">
                  {metric.count}
                </div>
              ) : (
                <div className="w-8 ml-2"></div>
              )}
              
              {metric.showChevron && (
                <button className="text-gray-400 ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleHealth;
