
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Star, Calendar, TrendingUp } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

const CustomerInsights = () => {
  const customerSegments = [
    { tipo: "Premium", total: 245, receita: 156000, ticket: 85.50, cor: "#8B5CF6" },
    { tipo: "Idoso", total: 387, receita: 198000, ticket: 67.30, cor: "#10B981" },
    { tipo: "Comum", total: 892, receita: 285000, ticket: 45.20, cor: "#3B82F6" }
  ];

  const frequencyData = [
    { mes: "Jan", novos: 45, recorrentes: 156, reativados: 23 },
    { mes: "Fev", novos: 52, recorrentes: 178, reativados: 31 },
    { mes: "Mar", novos: 38, recorrentes: 189, reativados: 19 },
    { mes: "Abr", novos: 61, recorrentes: 203, reativados: 28 },
    { mes: "Mai", novos: 49, recorrentes: 221, reativados: 35 },
    { mes: "Jun", novos: 58, recorrentes: 234, reativados: 42 }
  ];

  const topProducts = [
    { produto: "Paracetamol", premium: 78, idoso: 156, comum: 223 },
    { produto: "Vitamina C", premium: 92, idoso: 134, comum: 187 },
    { produto: "Protetor Solar", premium: 145, idoso: 89, comum: 156 },
    { produto: "Multivitamínico", premium: 167, idoso: 201, comum: 134 },
    { produto: "Dipirona", premium: 56, idoso: 178, comum: 245 }
  ];

  const satisfactionData = [
    { categoria: "Atendimento", score: 4.7, meta: 4.5 },
    { categoria: "Produtos", score: 4.5, meta: 4.3 },
    { categoria: "Preços", score: 4.2, meta: 4.0 },
    { categoria: "Conveniência", score: 4.8, meta: 4.6 },
    { categoria: "Ambiente", score: 4.6, meta: 4.4 }
  ];

  return (
    <div className="space-y-6">
      {/* Segmentação de Clientes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {customerSegments.map((segment, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold" style={{ color: segment.cor }}>
                  Clientes {segment.tipo}
                </CardTitle>
                <Users className="h-5 w-5" style={{ color: segment.cor }} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">{segment.total}</p>
                <p className="text-sm text-gray-600">clientes ativos</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Receita Total</span>
                  <span className="font-semibold">R$ {(segment.receita / 1000).toFixed(0)}k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Ticket Médio</span>
                  <span className="font-semibold">R$ {segment.ticket}</span>
                </div>
              </div>
              <Progress 
                value={(segment.receita / 300000) * 100} 
                className="h-2"
                style={{ "--progress-foreground": segment.cor } as React.CSSProperties}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Frequência de Compras */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              Frequência de Compras
            </CardTitle>
            <CardDescription>Evolução da base de clientes por tipo</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={frequencyData}>
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
                <Area 
                  type="monotone" 
                  dataKey="recorrentes" 
                  stackId="1"
                  stroke="#3B82F6" 
                  fill="#3B82F6"
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="novos" 
                  stackId="1"
                  stroke="#10B981" 
                  fill="#10B981"
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="reativados" 
                  stackId="1"
                  stroke="#F59E0B" 
                  fill="#F59E0B"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Satisfação do Cliente */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-500" />
              Satisfação do Cliente
            </CardTitle>
            <CardDescription>Avaliação média por categoria (escala 1-5)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={satisfactionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="categoria" stroke="#6B7280" />
                <YAxis domain={[0, 5]} stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="score" fill="#10B981" name="Score Atual" radius={[4, 4, 0, 0]} />
                <Bar dataKey="meta" fill="#6B7280" name="Meta" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Produtos Preferidos por Segmento */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
            Produtos Preferidos por Segmento
          </CardTitle>
          <CardDescription>Análise de consumo por tipo de cliente</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={topProducts} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" stroke="#6B7280" />
              <YAxis dataKey="produto" type="category" width={120} stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: 'none', 
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="premium" fill="#8B5CF6" name="Premium" />
              <Bar dataKey="idoso" fill="#10B981" name="Idoso" />
              <Bar dataKey="comum" fill="#3B82F6" name="Comum" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerInsights;
