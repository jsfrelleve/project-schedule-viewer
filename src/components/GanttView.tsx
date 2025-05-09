
import React from "react";
import GanttHeader from "./Gantt/GanttHeader";
import ActivityList from "./Gantt/ActivityList";
import TimelineChart from "./Gantt/TimelineChart";
import { useGanttData } from "../hooks/useGanttData";

const GanttView: React.FC = () => {
  const { activities, months, toggleExpand } = useGanttData();
  
  return (
    <div className="flex flex-col h-full">
      {/* Timeline header */}
      <GanttHeader months={months} />
      
      {/* Activities and Gantt chart */}
      <div className="flex flex-1 overflow-y-auto">
        {/* Activities list */}
        <ActivityList activities={activities} toggleExpand={toggleExpand} />
        
        {/* Gantt chart */}
        <TimelineChart activities={activities} months={months} />
      </div>
      
      {/* Total counter */}
      <div className="bg-gray-50 py-1 px-4 border-t border-gray-300 text-xs">
        Total: 72
      </div>
    </div>
  );
};

export default GanttView;
