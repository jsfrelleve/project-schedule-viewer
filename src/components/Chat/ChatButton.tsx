
import React from "react";
import { MessageCircle } from "lucide-react";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "../ui/collapsible";
import ChatWindow from "./ChatWindow";

const ChatButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
            aria-label="Open chat"
          >
            <MessageCircle />
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2">
          <ChatWindow />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ChatButton;
