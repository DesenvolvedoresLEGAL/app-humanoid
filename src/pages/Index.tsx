import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  X,
  TrendingUp,
  Activity,
  CheckCircle,
  Phone,
  Clock
} from "lucide-react";

const Index = () => {
  console.log("HUMANOID Index component loading...");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "ldr-agent", label: "LDR Agent", icon: Target },
    { id: "sdr-agent", label: "SDR Agent", icon: MessageSquare },
    { id: "pipeline", label: "Pipeline", icon: Zap },
    { id: "leads", label: "Leads", icon: Users },
    { id: "settings", label: "Configurações", icon: Settings },
  ];

  const renderContent = () => {
    if (activeTab === "dashboard") {
      return (
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-slate-400">Monitore seus agentes de AI em tempo real</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white">
                <Activity className="mr-2 h-4 w-4" />
                Relatórios
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Bot className="mr-2 h-4 w-4" />
                Configurar Agentes
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-400">Leads Gerados Hoje</p>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-2xl font-bold text-white">47</p>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        +12%
                      </Badge>
                    </div>
                  </div>
                  <Target className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-400">Leads Qualificados</p>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-2xl font-bold text-white">23</p>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        +8%
                      </Badge>
                    </div>
                  </div>
                  <Users className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-400">Conversas Ativas</p>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-2xl font-bold text-white">15</p>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        +25%
                      </Badge>
                    </div>
                  </div>
                  <MessageSquare className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-400">Taxa de Conversão</p>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-2xl font-bold text-white">68%</p>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        +5%
                      </Badge>
                    </div>
                  </div>
                  <TrendingUp className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Pipeline de Vendas</CardTitle>
              <CardDescription>Fluxo completo de automação</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                    <Target className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="font-medium text-white mb-1">Busca de Leads</h3>
                  <p className="text-sm text-slate-400">LDR Agent identifica oportunidades</p>
                  <Badge className="mt-2 bg-blue-500/20 text-blue-400">47 hoje</Badge>
                </div>
                
                <div className="hidden lg:block text-slate-500">→</div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-3">
                    <Activity className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="font-medium text-white mb-1">Criação no CRM</h3>
                  <p className="text-sm text-slate-400">Oportunidades são registradas</p>
                  <Badge className="mt-2 bg-purple-500/20 text-purple-400">32 criadas</Badge>
                </div>
                
                <div className="hidden lg:block text-slate-500">→</div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                    <MessageSquare className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="font-medium text-white mb-1">Qualificação</h3>
                  <p className="text-sm text-slate-400">SDR Agent qualifica via WhatsApp/Voz</p>
                  <Badge className="mt-2 bg-green-500/20 text-green-400">15 ativas</Badge>
                </div>
                
                <div className="hidden lg:block text-slate-500">→</div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="font-medium text-white mb-1">Lead Qualificado</h3>
                  <p className="text-sm text-slate-400">Pronto para proposta comercial</p>
                  <Badge className="mt-2 bg-orange-500/20 text-orange-400">23 prontos</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            {activeTab === "ldr-agent" && "LDR Agent"}
            {activeTab === "sdr-agent" && "SDR Agent"} 
            {activeTab === "pipeline" && "Pipeline"}
            {activeTab === "leads" && "Gestão de Leads"}
            {activeTab === "settings" && "Configurações"}
          </h1>
          <p className="text-slate-400">Em desenvolvimento...</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">HUMANOID</h1>
        <p className="text-slate-400 mb-8">AI Sales Automation Platform</p>
        <div className="text-green-400">✓ Component loaded successfully!</div>
      </div>
    </div>
  );
};

export default Index;