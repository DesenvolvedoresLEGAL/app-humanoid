
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  MessageSquare, 
  Phone, 
  Settings, 
  Play, 
  Pause,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Volume2,
  MessageCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SDRAgent = () => {
  const [isAgentActive, setIsAgentActive] = useState(true);
  const [qualificationSettings, setQualificationSettings] = useState({
    whatsappEnabled: true,
    voiceEnabled: true,
    maxAttempts: 3,
    responseTime: 24
  });
  const { toast } = useToast();

  const handleStartAgent = () => {
    setIsAgentActive(true);
    toast({
      title: "SDR Agent Ativado",
      description: "O agente começou a qualificar leads automaticamente",
    });
  };

  const handleStopAgent = () => {
    setIsAgentActive(false);
    toast({
      title: "SDR Agent Pausado",
      description: "A qualificação automática foi pausada",
    });
  };

  const activeConversations = [
    {
      company: "TechCorp Solutions",
      contact: "João Silva",
      channel: "WhatsApp",
      status: "Em andamento",
      progress: 60,
      lastMessage: "Qual o principal desafio da empresa?",
      time: "2 min atrás"
    },
    {
      company: "Digital Innovations",
      contact: "Maria Santos",
      channel: "Voz",
      status: "Aguardando resposta",
      progress: 30,
      lastMessage: "Ligação agendada para 14h",
      time: "15 min atrás"
    },
    {
      company: "StartupXYZ",
      contact: "Carlos Oliveira",
      channel: "WhatsApp",
      status: "Qualificado",
      progress: 100,
      lastMessage: "Lead qualificado com sucesso",
      time: "1h atrás"
    }
  ];

  const qualificationFlow = [
    {
      step: 1,
      title: "Primeiro Contato",
      description: "Apresentação e agendamento",
      completion: 85
    },
    {
      step: 2,
      title: "Descoberta de Necessidades",
      description: "Identificar dores e desafios",
      completion: 70
    },
    {
      step: 3,
      title: "Qualificação BANT",
      description: "Budget, Authority, Need, Timeline",
      completion: 45
    },
    {
      step: 4,
      title: "Entrega Qualificada",
      description: "Lead pronto para vendas",
      completion: 30
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <MessageSquare className="h-8 w-8 text-green-500" />
            SDR Agent
          </h1>
          <p className="text-slate-400">Configure e monitore o agente de qualificação de leads</p>
        </div>
        <div className="flex gap-3">
          {isAgentActive ? (
            <Button 
              variant="outline" 
              onClick={handleStopAgent}
              className="border-red-600 text-red-400 hover:bg-red-600/20"
            >
              <Pause className="mr-2 h-4 w-4" />
              Pausar
            </Button>
          ) : (
            <Button 
              onClick={handleStartAgent}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            >
              <Play className="mr-2 h-4 w-4" />
              Iniciar
            </Button>
          )}
        </div>
      </div>

      {/* Agent Status */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-green-500" />
              Status do Agente
            </span>
            <Badge 
              className={isAgentActive ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}
            >
              {isAgentActive ? "Ativo" : "Pausado"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">15</div>
            <div className="text-sm text-slate-400">Conversas ativas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">23</div>
            <div className="text-sm text-slate-400">Leads qualificados</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">68%</div>
            <div className="text-sm text-slate-400">Taxa de qualificação</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">2.3h</div>
            <div className="text-sm text-slate-400">Tempo médio</div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Qualification Settings */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Settings className="h-5 w-5 text-purple-500" />
              Configurações de Qualificação
            </CardTitle>
            <CardDescription>Configure como o agente irá qualificar os leads</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  <Label className="text-slate-300">WhatsApp</Label>
                </div>
                <Switch 
                  checked={qualificationSettings.whatsappEnabled}
                  onCheckedChange={(checked) => 
                    setQualificationSettings({...qualificationSettings, whatsappEnabled: checked})
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-blue-500" />
                  <Label className="text-slate-300">IA Conversacional (Voz)</Label>
                </div>
                <Switch 
                  checked={qualificationSettings.voiceEnabled}
                  onCheckedChange={(checked) => 
                    setQualificationSettings({...qualificationSettings, voiceEnabled: checked})
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-300">Tentativas Máximas</Label>
              <Select 
                value={qualificationSettings.maxAttempts.toString()}
                onValueChange={(value) => 
                  setQualificationSettings({...qualificationSettings, maxAttempts: parseInt(value)})
                }
              >
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="1">1 tentativa</SelectItem>
                  <SelectItem value="2">2 tentativas</SelectItem>
                  <SelectItem value="3">3 tentativas</SelectItem>
                  <SelectItem value="5">5 tentativas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-300">Tempo de Resposta (horas)</Label>
              <Select 
                value={qualificationSettings.responseTime.toString()}
                onValueChange={(value) => 
                  setQualificationSettings({...qualificationSettings, responseTime: parseInt(value)})
                }
              >
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="1">1 hora</SelectItem>
                  <SelectItem value="6">6 horas</SelectItem>
                  <SelectItem value="24">24 horas</SelectItem>
                  <SelectItem value="48">48 horas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-300">Script de Qualificação</Label>
              <Textarea
                placeholder="Defina o script base que o agente usará para qualificar leads..."
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                rows={4}
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
              Salvar Configurações
            </Button>
          </CardContent>
        </Card>

        {/* Active Conversations */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              Conversas Ativas
            </CardTitle>
            <CardDescription>Leads sendo qualificados no momento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeConversations.map((conversation, index) => (
                <div key={index} className="p-4 rounded-lg bg-slate-700/30 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-white">{conversation.company}</h3>
                      <p className="text-sm text-slate-400">{conversation.contact}</p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={
                        conversation.status === "Qualificado" 
                          ? "border-green-500 text-green-400" 
                          : conversation.status === "Em andamento"
                          ? "border-blue-500 text-blue-400"
                          : "border-yellow-500 text-yellow-400"
                      }
                    >
                      {conversation.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    {conversation.channel === "WhatsApp" ? (
                      <MessageCircle className="h-3 w-3 text-green-500" />
                    ) : (
                      <Phone className="h-3 w-3 text-blue-500" />
                    )}
                    <span>{conversation.channel}</span>
                    <span>•</span>
                    <Clock className="h-3 w-3" />
                    <span>{conversation.time}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Progresso</span>
                      <span className="text-white">{conversation.progress}%</span>
                    </div>
                    <Progress value={conversation.progress} className="h-1" />
                  </div>

                  <div className="text-sm text-slate-300 bg-slate-600/30 p-2 rounded">
                    {conversation.lastMessage}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Qualification Flow */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-purple-500" />
            Fluxo de Qualificação
          </CardTitle>
          <CardDescription>Acompanhe o progresso das etapas de qualificação</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualificationFlow.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto ${
                  step.completion > 50 ? 'bg-green-500/20 text-green-400' : 'bg-slate-600/50 text-slate-400'
                }`}>
                  {step.step}
                </div>
                <h3 className="font-medium text-white mb-1">{step.title}</h3>
                <p className="text-sm text-slate-400 mb-2">{step.description}</p>
                <div className="space-y-1">
                  <div className="text-xs text-slate-400">{step.completion}% completo</div>
                  <Progress value={step.completion} className="h-1" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Voice AI Configuration */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-orange-500" />
            IA Conversacional
          </CardTitle>
          <CardDescription>Configure a voz e comportamento do agente</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-slate-300">Modelo de Voz</Label>
              <Select>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Selecione o modelo" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="female-1">Feminina Profissional</SelectItem>
                  <SelectItem value="male-1">Masculina Profissional</SelectItem>
                  <SelectItem value="female-2">Feminina Amigável</SelectItem>
                  <SelectItem value="male-2">Masculina Amigável</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-slate-300">Tom de Voz</Label>
              <Select>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Selecione o tom" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="professional">Profissional</SelectItem>
                  <SelectItem value="friendly">Amigável</SelectItem>
                  <SelectItem value="enthusiastic">Entusiasmado</SelectItem>
                  <SelectItem value="calm">Calmo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-slate-300">Detecção de Sentimento</Label>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-slate-300">Adaptação Automática</Label>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-slate-300">Gravação de Chamadas</Label>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SDRAgent;
