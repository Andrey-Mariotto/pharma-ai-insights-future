
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Brain, Bot, Zap, Target, Globe, Smartphone, Database, Shield } from "lucide-react";

const AIFutureSection = () => {
  const aiCapabilities = [
    {
      title: "Chatbot Inteligente",
      description: "Triagem de sintomas e recomendação de produtos 24/7",
      icon: Bot,
      progress: 75,
      status: "Em Desenvolvimento",
      impact: "Alto",
      timeline: "Q3 2024"
    },
    {
      title: "Automação de Pedidos",
      description: "Reposição automática baseada em ML e padrões de consumo",
      icon: Zap,
      progress: 60,
      status: "Planejado",
      impact: "Alto",
      timeline: "Q4 2024"
    },
    {
      title: "Prontuário Integrado",
      description: "Conexão com sistemas de saúde para histórico completo",
      icon: Database,
      progress: 30,
      status: "Pesquisa",
      impact: "Médio",
      timeline: "Q1 2025"
    },
    {
      title: "Detecção de Fraudes",
      description: "IA para identificar receitas suspeitas e padrões anômalos",
      icon: Shield,
      progress: 85,
      status: "Implementado",
      impact: "Alto",
      timeline: "Ativo"
    }
  ];

  const futureFeatures = [
    {
      category: "Atendimento ao Cliente",
      features: [
        "Assistente virtual farmacêutico",
        "Recomendação personalizada de produtos",
        "Alertas de interação medicamentosa",
        "Programa de adesão ao tratamento"
      ]
    },
    {
      category: "Gestão Operacional",
      features: [
        "Otimização de layout da farmácia",
        "Previsão de demanda sazonal",
        "Gestão dinâmica de preços",
        "Automação de compras"
      ]
    },
    {
      category: "Análise Preditiva",
      features: [
        "Previsão de epidemias locais",
        "Análise de tendências de saúde",
        "Otimização de campanhas",
        "Detecção precoce de problemas"
      ]
    },
    {
      category: "Integração Digital",
      features: [
        "Telemedicina integrada",
        "Receita digital automática",
        "Delivery inteligente",
        "App personalizado por paciente"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Implementado": return "bg-green-100 text-green-700";
      case "Em Desenvolvimento": return "bg-blue-100 text-blue-700";
      case "Planejado": return "bg-orange-100 text-orange-700";
      case "Pesquisa": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-8">
      {/* Vision Statement */}
      <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white border-0 overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">O Futuro da Farmácia é Inteligente</h2>
              <p className="text-blue-100 text-lg">
                Transformando a experiência farmacêutica com IA avançada e automação inteligente
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">89%</div>
              <div className="text-blue-100">Redução de erros</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">45%</div>
              <div className="text-blue-100">Aumento na eficiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">67%</div>
              <div className="text-blue-100">Melhoria na satisfação</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Capacidades em Desenvolvimento */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Zap className="h-6 w-6 mr-2 text-yellow-500" />
          Capacidades IA em Desenvolvimento
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiCapabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-800">
                          {capability.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getStatusColor(capability.status)}>
                            {capability.status}
                          </Badge>
                          <Badge variant="outline">
                            {capability.timeline}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span className="font-semibold">{capability.progress}%</span>
                    </div>
                    <Progress value={capability.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Roadmap de Recursos */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Target className="h-6 w-6 mr-2 text-green-500" />
          Roadmap de Inovação
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {futureFeatures.map((category, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {category.category}
                </CardTitle>
                <CardDescription>
                  Recursos planejados para transformar a experiência farmacêutica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Lidere a Revolução Digital na Farmácia
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Seja pioneiro na adoção de tecnologias que irão definir o futuro do setor farmacêutico. 
            Nossa plataforma IA está pronta para transformar sua farmácia em um centro de inovação em saúde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              <Brain className="h-4 w-4 mr-2" />
              Ativar IA Avançada
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
              <Globe className="h-4 w-4 mr-2" />
              Explorar Integrações
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIFutureSection;
