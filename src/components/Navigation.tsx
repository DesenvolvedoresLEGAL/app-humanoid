
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Bot, 
  Settings, 
  Users, 
  Target, 
  MessageSquare,
  Zap,
  Menu,
  X
} from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "ldr-agent", label: "LDR Agent", icon: Target },
    { id: "sdr-agent", label: "SDR Agent", icon: MessageSquare },
    { id: "pipeline", label: "Pipeline", icon: Zap },
    { id: "leads", label: "Leads", icon: Users },
    { id: "settings", label: "Configurações", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white/10 backdrop-blur-sm border-white/20"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 border-r border-slate-700 flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">HUMANOID</h1>
          </div>
          <p className="text-slate-400 text-sm mt-2">AI Sales Automation</p>
        </div>

        <nav className="flex-1 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start mb-2 text-slate-300 hover:text-white hover:bg-slate-700/50",
                  activeTab === item.id && "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border-r-2 border-blue-500"
                )}
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-40 transition-opacity duration-300",
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={cn(
          "absolute left-0 top-0 h-full w-64 bg-gradient-to-b from-slate-900 to-slate-800 transform transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="p-6 pt-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">HUMANOID</h1>
            </div>
            <p className="text-slate-400 text-sm mt-2">AI Sales Automation</p>
          </div>

          <nav className="px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start mb-2 text-slate-300 hover:text-white hover:bg-slate-700/50",
                    activeTab === item.id && "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border-r-2 border-blue-500"
                  )}
                  onClick={() => {
                    onTabChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
