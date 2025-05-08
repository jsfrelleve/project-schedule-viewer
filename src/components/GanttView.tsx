
import React, { useState } from "react";

interface Activity {
  id: string;
  name: string;
  level: number;
  isExpanded: boolean;
  type: "milestone" | "task" | "group";
  start: string;
  end: string;
  children?: Activity[];
  color?: string;
}

const GanttView = () => {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: "Foundation",
      name: "Foundation",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2021-05-01",
      end: "2021-07-15",
      color: "#a4c2f4",
      children: []
    },
    {
      id: "Structure",
      name: "Structure - Structure",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2021-07-15",
      end: "2022-02-15",
      color: "#b6d7a8",
      children: [
        {
          id: "EC1870",
          name: "Pre-fab Structural Frame Components",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2021-07-15",
          end: "2021-09-15",
          color: "#b6d7a8"
        },
        {
          id: "EC1390",
          name: "Erect Structural Frame",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2021-08-01",
          end: "2021-10-01",
          color: "#ea9999"
        },
        {
          id: "EC1410",
          name: "Begin Structural Phase",
          level: 1,
          isExpanded: false,
          type: "milestone",
          start: "2021-10-01",
          end: "2021-10-01"
        },
        {
          id: "EC1420",
          name: "Floor Decking",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2021-10-01",
          end: "2021-11-15",
          color: "#ea9999"
        },
        {
          id: "EC1430",
          name: "Concrete First Floor",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2021-11-15",
          end: "2021-12-15",
          color: "#ea9999"
        },
        {
          id: "EC1460",
          name: "Erect Stairwell and Elevator Walls",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2021-12-01",
          end: "2022-01-15",
          color: "#ea9999"
        },
        {
          id: "EC1470",
          name: "Concrete Basement Slab",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2021-12-15",
          end: "2022-01-15",
          color: "#b6d7a8"
        },
        {
          id: "EC1480",
          name: "Concrete Second Floor",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2022-01-01",
          end: "2022-02-01",
          color: "#ea9999"
        },
        {
          id: "EC1540",
          name: "Structure Complete",
          level: 1,
          isExpanded: false,
          type: "milestone",
          start: "2022-02-15",
          end: "2022-02-15"
        }
      ]
    },
    {
      id: "Mechanicals",
      name: "Mechanicals - Mechanical/Electrical Systems",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2022-01-15",
      end: "2022-07-01",
      color: "#d9d2e9",
      children: [
        {
          id: "EC1490",
          name: "Rough-In Phase Begins",
          level: 1,
          isExpanded: false,
          type: "milestone",
          start: "2022-01-15",
          end: "2022-01-15"
        },
        {
          id: "EC1690",
          name: "Rough In Complete",
          level: 1,
          isExpanded: false,
          type: "milestone",
          start: "2022-06-15",
          end: "2022-06-15"
        }
      ]
    },
    {
      id: "Lifts",
      name: "Lifts - Elevator",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2022-02-01",
      end: "2022-05-01",
      color: "#f4cccc",
      children: []
    },
    {
      id: "HVAC",
      name: "HVAC - HVAC",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2022-03-01",
      end: "2022-09-15",
      color: "#d9d2e9",
      children: []
    },
    {
      id: "Systems",
      name: "Systems - Plumbing and Electrical",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2022-03-15",
      end: "2022-09-01",
      color: "#d9d2e9",
      children: [
        {
          id: "EC1440",
          name: "Set Mechanical and Electrical Equipment",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2022-03-15",
          end: "2022-05-15",
          color: "#b6d7a8"
        },
        {
          id: "EC1520",
          name: "Rough-In Plumbing/Piping",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2022-04-15",
          end: "2022-07-01",
          color: "#d9d2e9"
        },
        {
          id: "EC1640",
          name: "Install Wiring and Cable",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2022-06-15",
          end: "2022-08-15",
          color: "#ea9999"
        },
        {
          id: "EC1660",
          name: "Connect Equipment",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2022-08-01",
          end: "2022-09-01",
          color: "#d9d2e9"
        }
      ]
    },
    {
      id: "ExFinish",
      name: "Ex-Finish - Exterior Finishes",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2022-05-01",
      end: "2022-11-15",
      color: "#b6d7a8",
      children: []
    },
    {
      id: "IntFinish",
      name: "Int-Finish - Interior Finishes",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2022-07-01",
      end: "2022-12-15",
      color: "#d9d2e9",
      children: []
    }
  ]);
  
  const months = [
    "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const toggleExpand = (id: string) => {
    setActivities(
      activities.map(activity => 
        activity.id === id ? { ...activity, isExpanded: !activity.isExpanded } : activity
      )
    );
  };

  return (
    <div className="flex flex-col h-full">
      {/* Timeline header */}
      <div className="flex">
        {/* Activity column headers */}
        <div className="flex border-b border-gray-300 bg-gray-50" style={{ width: '360px', minWidth: '360px' }}>
          <div className="w-16 py-2 px-2 text-xs font-medium border-r border-gray-300 text-center">ID</div>
          <div className="flex-1 py-2 px-2 text-xs font-medium border-r border-gray-300">Name</div>
        </div>
        
        {/* Timeline headers */}
        <div className="flex-1 overflow-x-auto">
          <div className="flex min-w-max">
            {/* Years */}
            <div className="flex border-b border-gray-300">
              <div className="w-[550px] text-center py-1 text-xs font-medium border-r border-gray-300">2021</div>
              <div className="w-[550px] text-center py-1 text-xs font-medium">2022</div>
            </div>
          </div>
          
          {/* Months */}
          <div className="flex min-w-max">
            {months.map((month, index) => (
              <div 
                key={`${month}-${index}`} 
                className="w-[92px] text-center py-1 text-xs border-r border-gray-300 bg-gray-50"
              >
                {month}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Activities and Gantt chart */}
      <div className="flex flex-1 overflow-y-auto">
        {/* Activities list */}
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
        
        {/* Gantt chart */}
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
      </div>
      
      {/* Total counter */}
      <div className="bg-gray-50 py-1 px-4 border-t border-gray-300 text-xs">
        Total: 72
      </div>
    </div>
  );
};

export default GanttView;
