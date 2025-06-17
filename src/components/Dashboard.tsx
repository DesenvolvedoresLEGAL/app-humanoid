
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  Target, 
  MessageSquare, 
  Bot, 
  Activity,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Leads Gerados Hoje",
      value: "47",
      change: "+12%",
      icon: Target,
      color: "text-blue-500"
    },
    {
      title: "Leads Qualificados",
      value: "23",
      change: "+8%",
      icon: Users,
      color: "text-green-500"
    },
    {
      title: "Conversas Ativas",
      value: "15",
      change: "+25%",
      icon: MessageSquare,
      color: "text-purple-500"
    },
    {
      title: "Taxa de Conversão",
      value: "68%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-orange-500"
    }
  ];

  const agentStatus = [
    {
      name: "LDR Agent",
      status: "Ativo",
      activity: "Buscando oportunidades - TI",
      progress: 75,
      statusColor: "bg-green-500"
    },
    {
      name: "SDR Agent",
      status: "Ativo",
      activity: "Qualificando 8 leads",
      progress: 60,
      statusColor: "bg-blue-500"
    }
  ];

  const recentActivities = [
    {
      type: "lead_found",
      company: "TechCorp Solutions",
      agent: "LDR Agent",
      time: "2 min atrás",
      icon: Target
    },
    {
      type: "qualification_started",
      company: "Digital Innovations",
      agent: "SDR Agent",
      time: "5 min atrás",
      icon: MessageSquare
    },
    {
      type: "lead_qualified",
      company: "StartupXYZ",
      agent: "SDR Agent",
      time: "8 min atrás",
      icon: CheckCircle
    },
    {
      type: "opportunity_created",
      company: "Enterprise Corp",
      agent: "LDR Agent",
      time: "12 min atrás",
      icon: Activity
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-400">{stat.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Agent Status */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Bot className="h-5 w-5 text-blue-500" />
              Status dos Agentes
            </CardTitle>
            <CardDescription>Monitoramento em tempo real</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {agentStatus.map((agent, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${agent.statusColor}`} />
                    <span className="font-medium text-white">{agent.name}</span>
                    <Badge variant="outline" className="border-slate-600 text-slate-300">
                      {agent.status}
                    </Badge>
                  </div>
                  <span className="text-sm text-slate-400">{agent.progress}%</span>
                </div>
                <p className="text-sm text-slate-400 ml-6">{agent.activity}</p>
                <Progress value={agent.progress} className="ml-6 h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              Atividades Recentes
            </CardTitle>
            <CardDescription>Últimas ações dos agentes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30">
                    <Icon className="h-4 w-4 text-blue-400" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{activity.company}</p>
                      <p className="text-xs text-slate-400">{activity.agent} • {activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Overview */}
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
};

export default Dashboard;
