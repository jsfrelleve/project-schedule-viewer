
import React, { useState } from "react";
import ProjectHeader from "../components/ProjectHeader";
import { Paperclip } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

// Mock user data
const mockUsers = [
  { id: "user2", name: "John Smith", role: "Project Manager", lastActive: "5m ago", avatar: "JS" },
  { id: "user3", name: "Maria Garcia", role: "Engineer", lastActive: "1h ago", avatar: "MG" },
  { id: "user4", name: "Alex Wong", role: "Architect", lastActive: "3h ago", avatar: "AW" },
  { id: "user5", name: "Sarah Johnson", role: "Construction Lead", lastActive: "2d ago", avatar: "SJ" },
];

// Mock message data
const mockMessages = [
  { 
    id: "1", 
    userId: "user2", 
    messages: [
      { id: "1-1", content: "Hi there, any updates on the structure phase?", time: "Yesterday, 9:30 AM", hasAttachment: false },
      { id: "1-2", content: "The client is asking for a status update", time: "Yesterday, 9:35 AM", hasAttachment: false },
    ] 
  },
  { 
    id: "2", 
    userId: "user3", 
    messages: [
      { id: "2-1", content: "I've made some changes to the mechanical plans", time: "3 days ago", hasAttachment: true },
    ] 
  },
  { 
    id: "3", 
    userId: "user4", 
    messages: [
      { id: "3-1", content: "Here's the updated timeline for the HVAC installation", time: "1 week ago", hasAttachment: true },
    ] 
  },
];

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState<string | null>("user2");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeUser = mockUsers.find(user => user.id === activeConversation);
  const activeMessages = mockMessages.find(msg => msg.userId === activeConversation);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Project Header */}
      <ProjectHeader />
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Contacts Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium">Messages</h2>
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Contact List */}
          <div className="flex-1 overflow-y-auto">
            {filteredUsers.map((user) => (
              <div 
                key={user.id}
                className={`flex items-center p-4 border-b border-gray-100 cursor-pointer ${
                  activeConversation === user.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveConversation(user.id)}
              >
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
                  {user.avatar}
                </div>
                <div className="ml-3">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-gray-500">{user.role}</div>
                </div>
                <div className="ml-auto text-xs text-gray-500">
                  {user.lastActive}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Conversation Area */}
        <div className="flex-1 flex flex-col">
          {activeConversation ? (
            <>
              {/* Conversation Header */}
              <div className="p-4 border-b border-gray-200 bg-white flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
                  {activeUser?.avatar}
                </div>
                <div className="ml-3">
                  <div className="font-medium">{activeUser?.name}</div>
                  <div className="text-xs text-gray-500">{activeUser?.role}</div>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {activeMessages?.messages.map((message) => (
                  <div key={message.id} className="mb-4 max-w-xl">
                    <div className="bg-white rounded-lg shadow-sm p-3">
                      <div className="text-sm">{message.content}</div>
                      {message.hasAttachment && (
                        <div className="mt-2 flex items-center text-xs text-blue-500">
                          <Paperclip size={12} className="mr-1" />
                          <span>attachment.pdf</span>
                        </div>
                      )}
                      <div className="text-xs text-gray-500 mt-1">{message.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Message Input */}
              <div className="p-4 bg-white border-t border-gray-200">
                <textarea 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type a message..."
                  rows={3}
                ></textarea>
                <div className="flex justify-between items-center mt-2">
                  <button className="text-gray-500 hover:text-blue-500">
                    <Paperclip size={18} />
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a conversation to start messaging
            </div>
          )}
        </div>

        {/* Activity Logic Nodes Panel */}
        <div className="w-80 bg-white border-l border-gray-200">
          <Accordion type="single" collapsible>
            <AccordionItem value="activity-logic">
              <AccordionTrigger className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                Activity Logic
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="text-sm font-medium mb-2">Predecessors</h3>
                    <div className="p-2 border border-gray-200 rounded-md bg-gray-50">
                      <div className="flex justify-between text-xs py-1">
                        <span>EC1390: Erect Structural Frame</span>
                        <span>FS</span>
                      </div>
                      <div className="flex justify-between text-xs py-1">
                        <span>EC1870: Pre-fab Components</span>
                        <span>FS+5d</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h3 className="text-sm font-medium mb-2">Successors</h3>
                    <div className="p-2 border border-gray-200 rounded-md bg-gray-50">
                      <div className="flex justify-between text-xs py-1">
                        <span>EC1430: Concrete First Floor</span>
                        <span>SS</span>
                      </div>
                      <div className="flex justify-between text-xs py-1">
                        <span>EC1460: Stairwell Walls</span>
                        <span>FF-2d</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-sm font-medium mb-2">Activity Logic Diagram</h3>
                    <div className="bg-white p-3 border border-gray-200 rounded-md">
                      <div className="flex flex-col items-center">
                        <div className="flex justify-center space-x-10 mb-6">
                          <div className="p-2 border border-gray-300 rounded text-xs text-center">
                            EC1390<br/>
                            Erect Structural<br/>
                            Frame
                          </div>
                          <div className="p-2 border border-gray-300 rounded text-xs text-center">
                            EC1870<br/>
                            Pre-fab<br/>
                            Components
                          </div>
                        </div>
                        
                        <div className="border-l-2 border-gray-400 h-6"></div>
                        
                        <div className="p-2 border-2 border-blue-500 bg-blue-50 rounded text-xs text-center">
                          EC1420<br/>
                          Floor<br/>
                          Decking
                        </div>
                        
                        <div className="border-l-2 border-gray-400 h-6"></div>
                        
                        <div className="flex justify-center space-x-10 mt-0">
                          <div className="p-2 border border-gray-300 rounded text-xs text-center">
                            EC1430<br/>
                            Concrete<br/>
                            First Floor
                          </div>
                          <div className="p-2 border border-gray-300 rounded text-xs text-center">
                            EC1460<br/>
                            Stairwell<br/>
                            Walls
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Messages;
