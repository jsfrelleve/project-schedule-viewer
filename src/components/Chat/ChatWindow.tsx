
import React, { useState } from "react";
import { Paperclip, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

// Mock user data
const currentUser = { id: "user1", name: "You" };
const mockUsers = [
  { id: "user2", name: "John Smith" },
  { id: "user3", name: "Maria Garcia" },
  { id: "user4", name: "Alex Wong" },
];

// Mock message data
const initialMessages = [
  { id: "1", sender: "user2", content: "Hi there, any updates on the structure phase?", time: "9:30 AM", attachment: null },
  { id: "2", sender: "user1", content: "We're on track with the structural frame components.", time: "9:32 AM", attachment: null },
];

const ChatWindow = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (newMessage.trim() || selectedFile) {
      const attachment = selectedFile ? { name: selectedFile.name, size: selectedFile.size } : null;
      
      setMessages([...messages, {
        id: Date.now().toString(),
        sender: currentUser.id,
        content: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        attachment
      }]);
      
      setNewMessage("");
      setSelectedFile(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl w-80 h-[400px] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
        <h3 className="font-medium">Team Chat</h3>
        <button className="text-white hover:text-blue-100">
          <ChevronDown size={20} />
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((msg) => {
          const sender = msg.sender === currentUser.id 
            ? currentUser 
            : mockUsers.find(user => user.id === msg.sender);
          
          const isOwnMessage = msg.sender === currentUser.id;
          
          return (
            <div 
              key={msg.id} 
              className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[70%] rounded-lg px-3 py-2 ${
                  isOwnMessage 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {!isOwnMessage && (
                  <div className="font-medium text-xs mb-1">{sender?.name}</div>
                )}
                <div>{msg.content}</div>
                {msg.attachment && (
                  <div className="mt-1 flex items-center text-xs">
                    <Paperclip size={12} className="mr-1" />
                    <span>{msg.attachment.name}</span>
                  </div>
                )}
                <div className={`text-xs mt-1 ${isOwnMessage ? 'text-blue-100' : 'text-gray-500'}`}>
                  {msg.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* File attachment preview */}
      {selectedFile && (
        <div className="px-3 py-2 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-600">
              <Paperclip size={12} className="mr-1" />
              <span className="truncate max-w-[180px]">{selectedFile.name}</span>
            </div>
            <button 
              className="text-red-500 text-xs"
              onClick={() => setSelectedFile(null)}
            >
              Remove
            </button>
          </div>
        </div>
      )}
      
      {/* Input area */}
      <div className="border-t border-gray-200 p-3">
        <div className="flex space-x-2">
          <Textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="min-h-[60px] text-sm resize-none"
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-gray-500 hover:text-blue-600"
          >
            <Paperclip size={18} />
          </button>
          <Button 
            size="sm" 
            onClick={handleSendMessage}
            disabled={!newMessage.trim() && !selectedFile}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
