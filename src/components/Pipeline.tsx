
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  Activity, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  DollarSign
} from "lucide-react";

const Pipeline = () => {
  const pipelineStages = [
    {
      id: "prospecting",
      title: "Prospecção",
      description: "LDR Agent busca oportunidades",
      icon: Target,
      color: "blue",
      count: 47,
      conversion: "100%",
      avgTime: "30min"
    },
    {
      id: "crm-creation",
      title: "Criação no CRM",
      description: "Oportunidades registradas",
      icon: Activity,
      color: "purple",
      count: 32,
      conversion: "68%",
      avgTime: "5min"
    },
    {
      id: "qualification",
      title: "Qualificação",
      description: "SDR Agent qualifica leads",
      icon: MessageSquare,
      color: "green",
      count: 23,
      conversion: "72%",
      avgTime: "2.3h"
    },
    {
      id: "qualified",
      title: "Lead Qualificado",
      description: "Pronto para vendas",
      icon: CheckCircle,
      color: "orange",
      count: 16,
      conversion: "70%",
      avgTime: "24h"
    }
  ];

  const recentActivities = [
    {
      stage: "prospecting",
      company: "TechCorp Solutions",
      action: "Nova empresa encontrada",
      time: "2 min atrás",
      agent: "LDR Agent"
    },
    {
      stage: "qualification",
      company: "Digital Innovations",
      action: "Qualificação iniciada via WhatsApp",
      time: "5 min atrás",
      agent: "SDR Agent"
    },
    {
      stage: "qualified",
      company: "StartupXYZ",
      action: "Lead qualificado com sucesso",
      time: "8 min atrás",
      agent: "SDR Agent"
    },
    {
      stage: "crm-creation",
      company: "Enterprise Corp",
      action: "Oportunidade criada no CRM",
      time: "12 min atrás",
      agent: "LDR Agent"
    }
  ];

  const getStageColor = (color: string) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30", 
      green: "bg-green-500/20 text-green-400 border-green-500/30",
      orange: "bg-orange-500/20 text-orange-400 border-orange-500/30"
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-400",
      purple: "text-purple-400",
      green: "text-green-400", 
      orange: "text-orange-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Activity className="h-8 w-8 text-purple-500" />
            Pipeline de Vendas
          </h1>
          <p className="text-slate-400">Visualize todo o fluxo de automação de vendas</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white">
            <TrendingUp className="mr-2 h-4 w-4" />
            Relatórios
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Users className="mr-2 h-4 w-4" />
            Exportar Leads
          </Button>
        </div>
      </div>

      {/* Pipeline Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pipelineStages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <Card key={stage.id} className="bg-slate-800/50 border-slate-700 relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`h-8 w-8 ${getIconColor(stage.color)}`} />
                  <Badge className={getStageColor(stage.color)}>
                    {stage.count}
                  </Badge>
                </div>
                <h3 className="font-semibold text-white mb-1">{stage.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{stage.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Conversão</span>
                    <span className="text-white">{stage.conversion}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Tempo médio</span>
                    <span className="text-white">{stage.avgTime}</span>
                  </div>
                </div>

                {index < pipelineStages.length - 1 && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                    <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Funnel */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Funil de Conversão
            </CardTitle>
            <CardDescription>Taxa de conversão entre etapas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">Prospecção → CRM</span>
                  <span className="text-white">68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">CRM → Qualificação</span>
                  <span className="text-white">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">Qualificação → Qualificado</span>
                  <span className="text-white">70%</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
            </div>

            <div className="bg-slate-700/30 p-4 rounded-lg mt-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Conversão Geral</span>
                <span className="text-2xl font-bold text-white">34%</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">47 leads → 16 qualificados</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-500" />
              Atividades Recentes
            </CardTitle>
            <CardDescription>Últimas movimentações no pipeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const stage = pipelineStages.find(s => s.id === activity.stage);
                const Icon = stage?.icon || Activity;
                return (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30">
                    <Icon className={`h-4 w-4 mt-0.5 ${getIconColor(stage?.color || "blue")}`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{activity.company}</p>
                      <p className="text-xs text-slate-400">{activity.action}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {activity.agent}
                        </Badge>
                        <span className="text-xs text-slate-500">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-yellow-500" />
            Métricas de Performance
          </CardTitle>
          <CardDescription>Indicadores de performance dos agentes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-white mb-1">R$ 234k</div>
              <div className="text-sm text-slate-400">Pipeline Value</div>
              <div className="text-xs text-green-400 mt-1">+15% este mês</div>
            </div>
            
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-white mb-1">2.3h</div>
              <div className="text-sm text-slate-400">Tempo médio qualificação</div>
              <div className="text-xs text-green-400 mt-1">-30min vs. mês anterior</div>
            </div>
            
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-white mb-1">89%</div>
              <div className="text-sm text-slate-400">Precisão do LDR</div>
              <div className="text-xs text-green-400 mt-1">+5% este mês</div>
            </div>
            
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-white mb-1">156</div>
              <div className="text-sm text-slate-400">Leads este mês</div>
              <div className="text-xs text-green-400 mt-1">+24% vs. mês anterior</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pipeline;
