
import React from "react";
import { Activity } from "../../types/gantt";

interface TimelineChartProps {
  activities: Activity[];
  months: string[];
}

const TimelineChart: React.FC<TimelineChartProps> = ({ activities, months }) => {
  return (
    <div className="flex-1 overflow-auto relative">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="flex h-full min-w-max">
          {months.map((month, index) => (
            <div 
              key={`grid-${month}-${index}`} 
              className="w-[92px] border-r border-gray-200"
            >
            </div>
          ))}
        </div>
      </div>
      
      {/* Bars */}
      <div className="relative min-w-max">
        {activities.map((activity, activityIndex) => (
          <React.Fragment key={`bar-${activity.id}`}>
            <div className="h-[30px] relative">
              {activity.level === 0 && (
                <div 
                  className="absolute h-5 rounded-sm top-[10px]"
                  style={{
                    left: `${92 * 2}px`, // Starting from May 2021
                    width: `${activity.id === "Foundation" ? 180 : activity.id === "Structure" ? 210 : activity.id === "Mechanicals" ? 180 : 150}px`,
                    backgroundColor: activity.color || '#b6d7a8',
                  }}
                ></div>
              )}
            </div>
            
            {/* Render bars for children if expanded */}
            {activity.isExpanded && activity.children && activity.children.map((child) => (
              <div key={`bar-${child.id}`} className="h-[30px] relative">
                {child.type === "milestone" ? (
                  <div 
                    className="absolute w-4 h-4 bg-black transform rotate-45"
                    style={{
                      left: `${child.id === "EC1410" ? 92 * 5 + 10 : child.id === "EC1540" ? 92 * 11 : child.id === "EC1490" ? 92 * 10 + 20 : 92 * 15 + 20}px`,
                      top: '8px'
                    }}
                  ></div>
                ) : (
                  <div 
                    className="absolute h-4 rounded-sm top-[8px]"
                    style={{
                      left: `${
                        child.id === "EC1870" ? 92 * 4 : 
                        child.id === "EC1390" ? 92 * 5 - 10 : 
                        child.id === "EC1420" ? 92 * 7 - 20 :
                        child.id === "EC1430" ? 92 * 8 :
                        child.id === "EC1460" ? 92 * 9 - 30 :
                        child.id === "EC1470" ? 92 * 9 - 15 :
                        child.id === "EC1480" ? 92 * 10 :
                        child.id === "EC1440" ? 92 * 12 :
                        child.id === "EC1520" ? 92 * 13 :
                        child.id === "EC1640" ? 92 * 15 + 10 :
                        92 * 17 - 10}px`,
                      width: `${80}px`,
                      backgroundColor: child.color || '#ea9999',
                    }}
                  ></div>
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
        
        {/* Current date line */}
        <div 
          className="absolute top-0 bottom-0 border-l-2 border-blue-500"
          style={{ left: `${92 * 14 + 30}px` }}
        ></div>
      </div>
    </div>
  );
};

export default TimelineChart;
