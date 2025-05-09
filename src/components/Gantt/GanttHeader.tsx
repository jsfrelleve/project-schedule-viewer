
import React from "react";

interface GanttHeaderProps {
  months: string[];
}

const GanttHeader: React.FC<GanttHeaderProps> = ({ months }) => {
  return (
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
  );
};

export default GanttHeader;
