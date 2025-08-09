import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Activity, TrendingUp, Package, Users, Brain, Pill, ShoppingCart, AlertTriangle } from "lucide-react";
import SalesChart from "@/components/dashboard/SalesChart";
import StockAnalysis from "@/components/dashboard/StockAnalysis";
import CustomerInsights from "@/components/dashboard/CustomerInsights";
import PredictiveAnalysis from "@/components/dashboard/PredictiveAnalysis";
import AIFutureSection from "@/components/dashboard/AIFutureSection";
import KPICards from "@/components/dashboard/KPICards";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">Analise Farmacia </h1>
                <p className="text-sm text-gray-600">Dashboard Inteligente para o Futuro das Farmácias</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <Activity className="h-3 w-3 mr-1" />
              Sistema Ativo
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Alertas Inteligentes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Alert className="border-orange-200 bg-orange-50">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800">
              <strong>12 produtos</strong> com estoque baixo detectados
            </AlertDescription>
          </Alert>
          <Alert className="border-blue-200 bg-blue-50">
            <Brain className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              IA prevê <strong>aumento de 23%</strong> nas vendas de antigripais
            </AlertDescription>
          </Alert>
          <Alert className="border-green-200 bg-green-50">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>Receita cresceu 15%</strong> este mês vs. anterior
            </AlertDescription>
          </Alert>
        </div>

        {/* KPIs Principais */}
        <KPICards />

        {/* Dashboard Principal */}
        <Tabs defaultValue="vendas" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="vendas" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Vendas
            </TabsTrigger>
            <TabsTrigger value="estoque" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Package className="h-4 w-4 mr-2" />
              Estoque
            </TabsTrigger>
            <TabsTrigger value="clientes" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Users className="h-4 w-4 mr-2" />
              Clientes
            </TabsTrigger>
            <TabsTrigger value="preditiva" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Brain className="h-4 w-4 mr-2" />
              IA Preditiva
            </TabsTrigger>
            <TabsTrigger value="futuro" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Activity className="h-4 w-4 mr-2" />
              Futuro IA
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vendas" className="space-y-6">
            <SalesChart />
          </TabsContent>

          <TabsContent value="estoque" className="space-y-6">
            <StockAnalysis />
          </TabsContent>

          <TabsContent value="clientes" className="space-y-6">
            <CustomerInsights />
          </TabsContent>

          <TabsContent value="preditiva" className="space-y-6">
            <PredictiveAnalysis />
          </TabsContent>

          <TabsContent value="futuro" className="space-y-6">
            <AIFutureSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>;
};
export default Index;