
import React from "react";
import { Activity } from "../../types/gantt";

interface ActivityListProps {
  activities: Activity[];
  toggleExpand: (id: string) => void;
}

const ActivityList: React.FC<ActivityListProps> = ({ activities, toggleExpand }) => {
  return (
    <div className="w-[360px] min-w-[360px] overflow-y-auto border-r border-gray-300">
      {activities.map((activity) => (
        <React.Fragment key={activity.id}>
          <div 
            className={`flex items-center border-b border-gray-200 ${
              activity.level === 0 ? "bg-[#f1f1f1]" : "bg-white"
            } hover:bg-blue-50`}
          >
            <div className="w-16 py-2 px-2 text-xs border-r border-gray-200 text-center">{activity.id}</div>
            <div 
              className="flex-1 py-2 px-2 text-xs flex items-center"
              style={{ paddingLeft: `${activity.level * 20 + 8}px` }}
            >
              {activity.children && activity.children.length > 0 && (
                <button 
                  className="mr-1 w-4 h-4 flex items-center justify-center"
                  onClick={() => toggleExpand(activity.id)}
                >
                  {activity.isExpanded ? "-" : "+"}
                </button>
              )}
              {activity.level === 0 && (
                <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
              )}
              {activity.type === "milestone" && (
                <div className="w-3 h-3 diamond mr-1 bg-black rotate-45"></div>
              )}
              {activity.type === "task" && (
                <div className="w-3 h-3 mr-1 bg-black"></div>
              )}
              {activity.name}
            </div>
          </div>
          
          {/* Render children if expanded */}
          {activity.isExpanded && activity.children && activity.children.map((child) => (
            <div 
              key={child.id}
              className="flex items-center border-b border-gray-200 bg-white hover:bg-blue-50"
            >
              <div className="w-16 py-2 px-2 text-xs border-r border-gray-200 text-center">{child.id}</div>
              <div 
                className="flex-1 py-2 px-2 text-xs flex items-center"
                style={{ paddingLeft: `${child.level * 20 + 8}px` }}
              >
                {child.type === "milestone" && (
                  <div className="w-3 h-3 diamond mr-1 bg-black rotate-45"></div>
                )}
                {child.type === "task" && (
                  <div className="w-3 h-3 mr-1 bg-black"></div>
                )}
                {child.name}
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ActivityList;
