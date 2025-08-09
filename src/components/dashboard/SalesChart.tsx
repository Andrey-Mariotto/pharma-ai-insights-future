
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const SalesChart = () => {
  const salesData = [
    { month: "Jan", vendas: 28000, medicamentos: 18000, cosmeticos: 6000, suplementos: 4000 },
    { month: "Fev", vendas: 32000, medicamentos: 20000, cosmeticos: 7000, suplementos: 5000 },
    { month: "Mar", vendas: 29000, medicamentos: 19000, cosmeticos: 6500, suplementos: 3500 },
    { month: "Abr", vendas: 35000, medicamentos: 22000, cosmeticos: 8000, suplementos: 5000 },
    { month: "Mai", vendas: 38000, medicamentos: 24000, cosmeticos: 8500, suplementos: 5500 },
    { month: "Jun", vendas: 41000, medicamentos: 26000, cosmeticos: 9000, suplementos: 6000 }
  ];

  const categoryData = [
    { name: "Medicamentos", value: 65, color: "#3B82F6" },
    { name: "Cosméticos", value: 20, color: "#10B981" },
    { name: "Suplementos", value: 15, color: "#F59E0B" }
  ];

  const topProducts = [
    { produto: "Paracetamol 500mg", vendas: 456, categoria: "Medicamento" },
    { produto: "Vitamina C", vendas: 324, categoria: "Suplemento" },
    { produto: "Protetor Solar FPS 60", vendas: 298, categoria: "Cosmético" },
    { produto: "Dipirona 500mg", vendas: 287, categoria: "Medicamento" },
    { produto: "Multivitamínico", vendas: 245, categoria: "Suplemento" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Gráfico de Vendas Temporais */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">Evolução das Vendas</CardTitle>
          <CardDescription>Tendência de vendas por categoria nos últimos 6 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
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
                dataKey="medicamentos" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="cosmeticos" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="suplementos" 
                stroke="#F59E0B" 
                strokeWidth={3}
                dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Distribuição por Categoria */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">Distribuição por Categoria</CardTitle>
          <CardDescription>Participação de cada categoria nas vendas totais</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Produtos */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">Produtos Mais Vendidos</CardTitle>
          <CardDescription>Ranking dos produtos com maior volume de vendas</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topProducts}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="produto" stroke="#6B7280" />
              <YAxis type="number" stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: 'none', 
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="vendas" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesChart;
