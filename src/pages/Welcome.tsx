
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  FileArchive, 
  FileSearch, 
  ChartLine, 
  ChartGantt, 
  Link as LinkIcon, 
  MessageSquare,
  Bell,
  Info,
  LayoutDashboard,
  Folder,
  CircleDollarSign
} from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white p-4 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              PP
            </div>
            <span className="font-semibold text-lg">ProjectPro</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Link to="/dashboard" className="px-4 py-2 bg-gray-900 text-white rounded-full flex items-center space-x-2">
              <LayoutDashboard size={16} />
              <span>Dashboard</span>
            </Link>
            <Link to="/" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full flex items-center space-x-2">
              <Folder size={16} />
              <span>Projects</span>
            </Link>
            <Link to="#" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full flex items-center space-x-2">
              <span>Digital Tools</span>
            </Link>
            <Link to="#" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full flex items-center space-x-2">
              <span>Resources</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tools..."
                className="px-4 py-2 pl-10 border border-gray-300 rounded-full"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <CircleDollarSign size={16} className="mr-2" />
              <span>Consult ProjectPro</span>
            </Button>
            <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
              <span className="text-sm">Eng</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Main Content - Left and Middle Column */}
          <div className="col-span-2">
            {/* Project Bulletin Board */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="https://images.unsplash.com/photo-1586818579651-8284d33dc5cf?q=80&w=1000" 
                  alt="Construction project" 
                  className="w-full object-cover h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent p-8 flex flex-col justify-between">
                  <div>
                    <div className="bg-amber-500/90 text-white text-xs inline-block px-2 py-1 rounded mb-2">
                      Ends in 7 days
                    </div>
                    <div className="flex items-center text-white/80 text-xs">
                      <span className="mr-3">ID#: HR4-254</span>
                      <span>Last updated: May 22, 2025</span>
                    </div>
                  </div>
                  <div className="text-white">
                    <h1 className="text-3xl font-bold mb-2">New Highway Expansion Project</h1>
                    <p className="text-sm mb-4">A critical infrastructure project connecting the north and south corridors. Team leads please ensure all schedule updates are submitted by the end of week.</p>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white">
                        Details
                      </Button>
                      <Button variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white">
                        Team Members
                      </Button>
                      <Button variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white">
                        BIM
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center border-t border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Project Manager" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium">Project Manager</div>
                    <div className="text-xs text-gray-500">Richard Torres</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    Other Projects
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Project Management Tools Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* P6 DBUT */}
              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <FileArchive size={20} />
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold mt-3">P6 DBUT</h3>
                  <p className="text-sm text-gray-500">P6 Database Backup Utility Tool</p>
                </div>
                <div className="border-t border-gray-100 p-3 flex justify-between items-center">
                  <Button size="sm" variant="outline" className="text-xs">
                    Launch
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs">
                    History
                  </Button>
                </div>
              </Card>
              
              {/* P6 Validator */}
              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <FileSearch size={20} />
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold mt-3">P6 Validator</h3>
                  <p className="text-sm text-gray-500">Schedule validation tool</p>
                </div>
                <div className="border-t border-gray-100 p-3 flex justify-between items-center">
                  <Button size="sm" variant="outline" className="text-xs">
                    Launch
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs">
                    History
                  </Button>
                </div>
              </Card>
              
              {/* P6 S-Curve Generator */}
              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <ChartLine size={20} />
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold mt-3">P6 S-Curve</h3>
                  <p className="text-sm text-gray-500">S-Curve Generator</p>
                </div>
                <div className="border-t border-gray-100 p-3 flex justify-between items-center">
                  <Button size="sm" variant="outline" className="text-xs">
                    Launch
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs">
                    History
                  </Button>
                </div>
              </Card>
              
              {/* OPC Viewer */}
              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <ChartGantt size={20} />
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold mt-3">OPC Viewer</h3>
                  <p className="text-sm text-gray-500">Gantt chart viewer</p>
                </div>
                <div className="border-t border-gray-100 p-3 flex justify-between items-center">
                  <Link to="/">
                    <Button size="sm" variant="outline" className="text-xs">
                      Launch
                    </Button>
                  </Link>
                  <Button size="sm" variant="ghost" className="text-xs">
                    History
                  </Button>
                </div>
              </Card>
              
              {/* OPC Integrator */}
              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <LinkIcon size={20} />
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold mt-3">OPC Integrator</h3>
                  <p className="text-sm text-gray-500">System integration tool</p>
                </div>
                <div className="border-t border-gray-100 p-3 flex justify-between items-center">
                  <Button size="sm" variant="outline" className="text-xs">
                    Launch
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs">
                    History
                  </Button>
                </div>
              </Card>
              
              {/* Project Collab */}
              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <MessageSquare size={20} />
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold mt-3">Project Collab</h3>
                  <p className="text-sm text-gray-500">Team messaging</p>
                </div>
                <div className="border-t border-gray-100 p-3 flex justify-between items-center">
                  <Link to="/messages">
                    <Button size="sm" variant="outline" className="text-xs">
                      Launch
                    </Button>
                  </Link>
                  <Button size="sm" variant="ghost" className="text-xs">
                    History
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* "See all modules" link */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Current Projects</h2>
              <Button variant="ghost" size="sm" className="text-blue-600">
                See all modules
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
            
            {/* Current Projects Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Project 1 */}
              <Card className="overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500" alt="Office Building" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Office Tower Complex</h3>
                  <div className="text-sm text-gray-500 mt-1">Phase: Foundation</div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs">Est. completion: 3.4 ETD</span>
                    <span className="text-xs font-medium">$5.2M</span>
                  </div>
                </CardContent>
                <div className="border-t border-gray-100 p-3 flex space-x-2">
                  <Button size="sm" variant="ghost" className="text-xs flex-1">
                    Activity Log
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs flex-1">
                    View Details
                  </Button>
                </div>
              </Card>
              
              {/* Project 2 */}
              <Card className="overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500" alt="Bridge Construction" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Urban Bridge Project</h3>
                  <div className="text-sm text-gray-500 mt-1">Phase: Steel Erection</div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs">Est. completion: 6.7 ETD</span>
                    <span className="text-xs font-medium">$8.7M</span>
                  </div>
                </CardContent>
                <div className="border-t border-gray-100 p-3 flex space-x-2">
                  <Button size="sm" variant="ghost" className="text-xs flex-1">
                    Activity Log
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs flex-1">
                    View Details
                  </Button>
                </div>
              </Card>
              
              {/* Project 3 */}
              <Card className="overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?w=500" alt="Hospital Construction" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Medical Center Expansion</h3>
                  <div className="text-sm text-gray-500 mt-1">Phase: Interior Finishing</div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs">Est. completion: 2.1 ETD</span>
                    <span className="text-xs font-medium">$12.5M</span>
                  </div>
                </CardContent>
                <div className="border-t border-gray-100 p-3 flex space-x-2">
                  <Button size="sm" variant="ghost" className="text-xs flex-1">
                    Activity Log
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs flex-1">
                    View Details
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Right Column - Notifications and Latest Activity */}
          <div className="space-y-6">
            {/* Notification Chart */}
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold">Notification Center</h2>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <div className="flex items-center">
                      <div className="bg-blue-100 text-blue-700 rounded-md p-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                      </div>
                      <span className="text-sm">For your action</span>
                    </div>
                    <span className="text-blue-600 font-medium">12</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <div className="flex items-center">
                      <div className="bg-purple-100 text-purple-700 rounded-md p-1 mr-3">
                        <FileText size={16} />
                      </div>
                      <span className="text-sm">Project newsfeeds</span>
                    </div>
                    <span className="text-purple-600 font-medium">8</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <div className="flex items-center">
                      <div className="bg-amber-100 text-amber-700 rounded-md p-1 mr-3">
                        <Bell size={16} />
                      </div>
                      <span className="text-sm">Alerts</span>
                    </div>
                    <span className="text-amber-600 font-medium">5</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-red-100 text-red-700 rounded-md p-1 mr-3">
                        <Info size={16} />
                      </div>
                      <span className="text-sm">Issues</span>
                    </div>
                    <span className="text-red-600 font-medium">3</span>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>
            
            {/* Latest Activity */}
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold">Latest Activity</h2>
                  <Button variant="ghost" size="sm" className="text-sm text-blue-600">
                    See all
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-sm">John Harrison</span>
                        <span className="text-gray-500 text-xs ml-2">1.37 ETD</span>
                      </div>
                      <p className="text-sm mt-1">Updated critical path for Highway Project</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-sm">Sarah Johnson</span>
                        <span className="text-gray-500 text-xs ml-2">3.14 ETD</span>
                      </div>
                      <p className="text-sm mt-1">Added resource assignments for Tower project</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="User" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-sm">Michael Roberts</span>
                        <span className="text-gray-500 text-xs ml-2">5.25 ETD</span>
                      </div>
                      <p className="text-sm mt-1">Schedule baseline approved for Bridge project</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
