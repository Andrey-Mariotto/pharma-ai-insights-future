
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Package, Users, Pill } from "lucide-react";

const KPICards = () => {
  const kpis = [
    {
      title: "Receita Total",
      value: "R$ 485.320",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      description: "vs. mês anterior",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Produtos Vendidos",
      value: "1.247",
      change: "+8.2%",
      trend: "up",
      icon: Package,
      description: "últimos 30 dias",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Clientes Ativos",
      value: "892",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      description: "base crescente",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Ticket Médio",
      value: "R$ 67,80",
      change: "-2.1%",
      trend: "down",
      icon: Pill,
      description: "vs. período anterior",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => {
        const IconComponent = kpi.icon;
        return (
          <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {kpi.title}
              </CardTitle>
              <div className={`w-12 h-12 ${kpi.bgColor} rounded-lg flex items-center justify-center`}>
                <IconComponent className={`h-6 w-6 ${kpi.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {kpi.value}
              </div>
              <div className="flex items-center space-x-2">
                <Badge 
                  variant={kpi.trend === "up" ? "default" : "destructive"}
                  className={`${kpi.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} hover:bg-opacity-80`}
                >
                  {kpi.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {kpi.change}
                </Badge>
                <span className="text-xs text-gray-500">{kpi.description}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default KPICards;
