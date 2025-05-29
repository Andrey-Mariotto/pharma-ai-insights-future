
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, TrendingUp, Target, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const PredictiveAnalysis = () => {
  const demandPrediction = [
    { mes: "Jul", atual: 38000, previsto: 42000, confianca: 85 },
    { mes: "Ago", atual: null, previsto: 45000, confianca: 82 },
    { mes: "Set", atual: null, previsto: 39000, confianca: 78 },
    { mes: "Out", atual: null, previsto: 48000, confianca: 75 },
    { mes: "Nov", atual: null, previsto: 52000, confianca: 73 },
    { mes: "Dez", atual: null, previsto: 58000, confianca: 70 }
  ];

  const seasonalTrends = [
    { categoria: "Antigripais", jul: 120, ago: 135, set: 180, out: 220, nov: 280, dez: 350 },
    { categoria: "Protetor Solar", jul: 280, ago: 300, set: 220, out: 150, nov: 90, dez: 80 },
    { categoria: "Antialérgicos", jul: 180, ago: 190, set: 240, out: 280, nov: 200, dez: 150 },
    { categoria: "Vitaminas", jul: 200, ago: 210, set: 230, out: 250, nov: 280, dez: 320 }
  ];

  const aiRecommendations = [
    {
      tipo: "Reposição Automática",
      produto: "Paracetamol 500mg",
      acao: "Pedir 500 unidades",
      confianca: 92,
      impacto: "Alto",
      prazo: "2 dias"
    },
    {
      tipo: "Oportunidade Cross-sell",
      produto: "Vitamina C + Zinco",
      acao: "Promocionar junto com antigripais",
      confianca: 78,
      impacto: "Médio",
      prazo: "1 semana"
    },
    {
      tipo: "Ajuste de Preço",
      produto: "Protetor Solar FPS 60",
      acao: "Reduzir preço em 15%",
      confianca: 85,
      impacto: "Alto",
      prazo: "Imediato"
    },
    {
      tipo: "Campanha Direcionada",
      produto: "Suplementos Esportivos",
      acao: "Focar em clientes Premium",
      confianca: 71,
      impacto: "Médio",
      prazo: "3 dias"
    }
  ];

  const riskAnalysis = [
    { area: "Fraude", score: 15, max: 100 },
    { area: "Estoque", score: 35, max: 100 },
    { area: "Demanda", score: 22, max: 100 },
    { area: "Preço", score: 28, max: 100 },
    { area: "Competição", score: 42, max: 100 },
    { area: "Regulação", score: 18, max: 100 }
  ];

  const getImpactColor = (impacto: string) => {
    switch (impacto) {
      case "Alto": return "bg-red-100 text-red-700";
      case "Médio": return "bg-orange-100 text-orange-700";
      case "Baixo": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header com Estatísticas da IA */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Precisão da IA</p>
                <p className="text-2xl font-bold">89.2%</p>
              </div>
              <Brain className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-500 to-teal-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Economia Gerada</p>
                <p className="text-2xl font-bold">R$ 23.4k</p>
              </div>
              <Target className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Insights Gerados</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <Zap className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Ações Sugeridas</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Previsão de Demanda */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
              <Brain className="h-5 w-5 mr-2 text-blue-600" />
              Previsão de Demanda
            </CardTitle>
            <CardDescription>Projeção de vendas baseada em ML (próximos 6 meses)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={demandPrediction}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="mes" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="atual" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 5 }}
                  name="Vendas Reais"
                />
                <Line 
                  type="monotone" 
                  dataKey="previsto" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  strokeDasharray="8 8"
                  dot={{ fill: "#3B82F6", strokeWidth: 2, r: 5 }}
                  name="Previsão IA"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Análise de Risco */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
              <Target className="h-5 w-5 mr-2 text-purple-600" />
              Análise de Risco
            </CardTitle>
            <CardDescription>Fatores de risco identificados pela IA</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={riskAnalysis}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis dataKey="area" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis domain={[0, 100]} tick={false} />
                <Radar
                  name="Nível de Risco"
                  dataKey="score"
                  stroke="#EF4444"
                  fill="#EF4444"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Tendências Sazonais */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
            Tendências Sazonais Previstas
          </CardTitle>
          <CardDescription>Padrões de consumo identificados pela IA para os próximos meses</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={[
              { mes: "Jul", Antigripais: 120, "Protetor Solar": 280, Antialérgicos: 180, Vitaminas: 200 },
              { mes: "Ago", Antigripais: 135, "Protetor Solar": 300, Antialérgicos: 190, Vitaminas: 210 },
              { mes: "Set", Antigripais: 180, "Protetor Solar": 220, Antialérgicos: 240, Vitaminas: 230 },
              { mes: "Out", Antigripais: 220, "Protetor Solar": 150, Antialérgicos: 280, Vitaminas: 250 },
              { mes: "Nov", Antigripais: 280, "Protetor Solar": 90, Antialérgicos: 200, Vitaminas: 280 },
              { mes: "Dez", Antigripais: 350, "Protetor Solar": 80, Antialérgicos: 150, Vitaminas: 320 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="mes" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Area type="monotone" dataKey="Antigripais" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
              <Area type="monotone" dataKey="Protetor Solar" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
              <Area type="monotone" dataKey="Antialérgicos" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              <Area type="monotone" dataKey="Vitaminas" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recomendações da IA */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
            <Zap className="h-5 w-5 mr-2 text-yellow-500" />
            Recomendações Inteligentes
          </CardTitle>
          <CardDescription>Ações sugeridas pela IA para otimizar resultados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {aiRecommendations.map((rec, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge variant="outline" className="text-blue-600 border-blue-300">
                        {rec.tipo}
                      </Badge>
                      <Badge className={getImpactColor(rec.impacto)}>
                        {rec.impacto}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-gray-900">{rec.produto}</h4>
                    <p className="text-sm text-gray-600 mt-1">{rec.acao}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-sm text-gray-500">Confiança</p>
                    <p className="text-lg font-bold text-blue-600">{rec.confianca}%</p>
                    <p className="text-xs text-gray-500">{rec.prazo}</p>
                  </div>
                </div>
                <Progress value={rec.confianca} className="h-2 mt-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictiveAnalysis;
