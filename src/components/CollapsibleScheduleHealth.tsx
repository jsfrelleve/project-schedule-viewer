
import React, { useState } from "react";
import ScheduleHealth from "./ScheduleHealth";
import { ChevronDown, ChevronUp } from "lucide-react";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "./ui/collapsible";

const CollapsibleScheduleHealth = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-80 bg-white border-l border-gray-200"
    >
      <CollapsibleTrigger className="w-full flex justify-between items-center p-2 border-b border-gray-200 bg-gray-50">
        <span className="font-medium text-sm">Schedule Health</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ScheduleHealth />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleScheduleHealth;
