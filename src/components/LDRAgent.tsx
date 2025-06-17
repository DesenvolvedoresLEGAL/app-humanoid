
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Target, 
  Settings, 
  Play, 
  Pause, 
  RefreshCw, 
  Search,
  Building,
  MapPin,
  Users,
  DollarSign,
  Calendar
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LDRAgent = () => {
  const [isAgentActive, setIsAgentActive] = useState(true);
  const [searchCriteria, setSearchCriteria] = useState({
    industry: "",
    companySize: "",
    location: "",
    revenue: "",
    keywords: ""
  });
  const { toast } = useToast();

  const handleStartAgent = () => {
    setIsAgentActive(true);
    toast({
      title: "LDR Agent Ativado",
      description: "O agente começou a buscar novas oportunidades",
    });
  };

  const handleStopAgent = () => {
    setIsAgentActive(false);
    toast({
      title: "LDR Agent Pausado",
      description: "A busca por oportunidades foi pausada",
    });
  };

  const recentFinds = [
    {
      company: "TechCorp Solutions",
      industry: "Tecnologia",
      size: "50-200 funcionários",
      location: "São Paulo, SP",
      status: "Processando",
      confidence: 85
    },
    {
      company: "Digital Innovations",
      industry: "Marketing Digital",
      size: "10-50 funcionários", 
      location: "Rio de Janeiro, RJ",
      status: "Criado no CRM",
      confidence: 92
    },
    {
      company: "StartupXYZ",
      industry: "Fintech",
      size: "10-50 funcionários",
      location: "Belo Horizonte, MG",
      status: "Criado no CRM",
      confidence: 78
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Target className="h-8 w-8 text-blue-500" />
            LDR Agent
          </h1>
          <p className="text-slate-400">Configure e monitore o agente de busca de oportunidades</p>
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
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white">
            <RefreshCw className="mr-2 h-4 w-4" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Agent Status */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-blue-500" />
              Status do Agente
            </span>
            <Badge 
              className={isAgentActive ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}
            >
              {isAgentActive ? "Ativo" : "Pausado"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">47</div>
            <div className="text-sm text-slate-400">Empresas encontradas hoje</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">32</div>
            <div className="text-sm text-slate-400">Oportunidades criadas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">85%</div>
            <div className="text-sm text-slate-400">Taxa de precisão</div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Search Configuration */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Search className="h-5 w-5 text-purple-500" />
              Configurações de Busca
            </CardTitle>
            <CardDescription>Defina os critérios para encontrar oportunidades</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-slate-300">Setor de Atuação</Label>
              <Select value={searchCriteria.industry} onValueChange={(value) => 
                setSearchCriteria({...searchCriteria, industry: value})
              }>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Selecione o setor" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="tecnologia">Tecnologia</SelectItem>
                  <SelectItem value="saude">Saúde</SelectItem>
                  <SelectItem value="financeiro">Financeiro</SelectItem>
                  <SelectItem value="educacao">Educação</SelectItem>
                  <SelectItem value="varejo">Varejo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companySize" className="text-slate-300">Tamanho da Empresa</Label>
              <Select value={searchCriteria.companySize} onValueChange={(value) => 
                setSearchCriteria({...searchCriteria, companySize: value})
              }>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Selecione o tamanho" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="1-10">1-10 funcionários</SelectItem>
                  <SelectItem value="11-50">11-50 funcionários</SelectItem>
                  <SelectItem value="51-200">51-200 funcionários</SelectItem>
                  <SelectItem value="201-1000">201-1000 funcionários</SelectItem>
                  <SelectItem value="1000+">1000+ funcionários</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-slate-300">Localização</Label>
              <Input
                id="location"
                placeholder="Ex: São Paulo, SP"
                value={searchCriteria.location}
                onChange={(e) => setSearchCriteria({...searchCriteria, location: e.target.value})}
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords" className="text-slate-300">Palavras-chave</Label>
              <Textarea
                id="keywords"
                placeholder="Ex: software, automação, CRM, vendas"
                value={searchCriteria.keywords}
                onChange={(e) => setSearchCriteria({...searchCriteria, keywords: e.target.value})}
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                rows={3}
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Salvar Configurações
            </Button>
          </CardContent>
        </Card>

        {/* Recent Finds */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Building className="h-5 w-5 text-green-500" />
              Oportunidades Encontradas
            </CardTitle>
            <CardDescription>Empresas descobertas recentemente</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentFinds.map((find, index) => (
                <div key={index} className="p-4 rounded-lg bg-slate-700/30 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-white">{find.company}</h3>
                    <Badge 
                      variant="outline" 
                      className={
                        find.status === "Criado no CRM" 
                          ? "border-green-500 text-green-400" 
                          : "border-yellow-500 text-yellow-400"
                      }
                    >
                      {find.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Building className="h-3 w-3" />
                      {find.industry}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {find.size}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {find.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      {find.confidence}% confiança
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* N8N Integration */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <RefreshCw className="h-5 w-5 text-orange-500" />
            Integração N8N
          </CardTitle>
          <CardDescription>Configure o workflow de automação</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="n8n-webhook" className="text-slate-300">Webhook URL (N8N)</Label>
              <Input
                id="n8n-webhook"
                placeholder="https://n8n.exemplo.com/webhook/ldr-agent"
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="crm-integration" className="text-slate-300">CRM de Destino</Label>
              <Select>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Selecione o CRM" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="hubspot">HubSpot</SelectItem>
                  <SelectItem value="salesforce">Salesforce</SelectItem>
                  <SelectItem value="pipedrive">Pipedrive</SelectItem>
                  <SelectItem value="rd-station">RD Station</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-create" className="text-slate-300">Criação Automática</Label>
              <Switch id="auto-create" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="notify-sdr" className="text-slate-300">Notificar SDR Agent</Label>
              <Switch id="notify-sdr" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="data-enrichment" className="text-slate-300">Enriquecimento de Dados</Label>
              <Switch id="data-enrichment" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LDRAgent;
