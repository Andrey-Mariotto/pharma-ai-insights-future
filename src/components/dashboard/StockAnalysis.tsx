
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Package, Clock, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const StockAnalysis = () => {
  const lowStockItems = [
    { produto: "Ibuprofeno 600mg", estoque: 12, minimo: 50, status: "crítico" },
    { produto: "Amoxicilina 500mg", estoque: 28, minimo: 100, status: "baixo" },
    { produto: "Protetor Solar FPS 30", estoque: 35, minimo: 80, status: "baixo" },
    { produto: "Vitamina D3", estoque: 8, minimo: 40, status: "crítico" },
    { produto: "Dipirona Gotas", estoque: 45, minimo: 120, status: "baixo" }
  ];

  const expiringItems = [
    { produto: "Xarope Infantil", validade: "15 dias", lotes: 3 },
    { produto: "Pomada Cicatrizante", validade: "22 dias", lotes: 2 },
    { produto: "Antibiótico Suspensão", validade: "30 dias", lotes: 1 },
    { produto: "Colírio Lubrificante", validade: "45 dias", lotes: 4 }
  ];

  const rotationData = [
    { categoria: "Analgésicos", giro: 8.5, meta: 6 },
    { categoria: "Antibióticos", giro: 4.2, meta: 5 },
    { categoria: "Vitaminas", giro: 3.8, meta: 4 },
    { categoria: "Cosméticos", giro: 2.1, meta: 3 },
    { categoria: "Suplementos", giro: 6.3, meta: 5 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "crítico": return "bg-red-100 text-red-700";
      case "baixo": return "bg-orange-100 text-orange-700";
      default: return "bg-green-100 text-green-700";
    }
  };

  const getValidadeColor = (dias: string) => {
    const numDias = parseInt(dias);
    if (numDias <= 20) return "text-red-600";
    if (numDias <= 40) return "text-orange-600";
    return "text-green-600";
  };

  return (
    <div className="space-y-6">
      {/* Alertas de Estoque */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>4 produtos</strong> em estoque crítico (abaixo de 50% do mínimo)
          </AlertDescription>
        </Alert>
        <Alert className="border-orange-200 bg-orange-50">
          <Clock className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>10 lotes</strong> vencem nos próximos 45 dias
          </AlertDescription>
        </Alert>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Produtos com Estoque Baixo */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
              <Package className="h-5 w-5 mr-2 text-blue-600" />
              Estoque Baixo
            </CardTitle>
            <CardDescription>Produtos que precisam de reposição urgente</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {lowStockItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.produto}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Progress 
                      value={(item.estoque / item.minimo) * 100} 
                      className="flex-1 h-2"
                    />
                    <span className="text-sm text-gray-600">
                      {item.estoque}/{item.minimo}
                    </span>
                  </div>
                </div>
                <Badge className={getStatusColor(item.status)}>
                  {item.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Produtos Próximos ao Vencimento */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-orange-600" />
              Validade Próxima
            </CardTitle>
            <CardDescription>Produtos que vencem nos próximos dias</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {expiringItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{item.produto}</p>
                  <p className="text-sm text-gray-600">{item.lotes} lote(s) afetado(s)</p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${getValidadeColor(item.validade)}`}>
                    {item.validade}
                  </p>
                  <p className="text-xs text-gray-500">restantes</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Análise de Rotatividade */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
            Rotatividade por Categoria
          </CardTitle>
          <CardDescription>Giro de estoque vs. meta estabelecida (vezes por mês)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={rotationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="categoria" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: 'none', 
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="giro" fill="#3B82F6" name="Giro Atual" radius={[4, 4, 0, 0]} />
              <Bar dataKey="meta" fill="#10B981" name="Meta" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockAnalysis;
