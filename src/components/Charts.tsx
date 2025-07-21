import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Tooltip,
  Legend,
} from "recharts";

const valueRangeData = [
  { range: "200k Até 300k", value: 320 },
  { range: "100k Até 200k", value: 280 },
  { range: "Até 100k", value: 450 },
  { range: "300k Até 400k", value: 180 },
  { range: "600k Até 1Mi", value: 120 },
  { range: "400k Até 500k", value: 90 },
  { range: "Fora do Interesse", value: 60 },
  { range: "500k Até 600k", value: 45 },
];

const leadsByPortalData = [
  { name: "Portal A", value: 35, color: "#3B82F6" },
  { name: "Portal B", value: 25, color: "#8B5CF6" },
  { name: "Portal C", value: 20, color: "#10B981" },
  { name: "Portal D", value: 15, color: "#F59E0B" },
  { name: "Outros", value: 5, color: "#EF4444" },
];

const leadsByBrokerData = [
  { name: "Flavia Cardoso", value: 238, color: "#3B82F6" },
  { name: "Renata Ribeiro", value: 165, color: "#8B5CF6" },
  { name: "Vivian Gama", value: 140, color: "#10B981" },
  { name: "Adriana W.", value: 120, color: "#F59E0B" },
  { name: "Jessica Lima", value: 95, color: "#EF4444" },
];

const leadsByPeriodData = [
  { period: "2022", leads: 320 },
  { period: "2023", leads: 450 },
  { period: "2024", leads: 580 },
  { period: "2025", leads: 640 },
];

const mostSearchedData = [
  { property: "Property A", searches: 47 },
  { property: "Property B", searches: 44 },
  { property: "Property C", searches: 40 },
  { property: "Property D", searches: 38 },
  { property: "Property E", searches: 35 },
];

export function ValueRangeChart() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Faixa de Valores</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={valueRangeData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis type="number" stroke="#9CA3AF" />
            <YAxis
              dataKey="range"
              type="category"
              stroke="#9CA3AF"
              width={100}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar dataKey="value" fill="#3B82F6" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function LeadsByPortalChart() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Leads por Portal</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={leadsByPortalData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {leadsByPortalData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Legend wrapperStyle={{ color: "#fff" }} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function LeadsByBrokerChart() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Qtd Leads por Corretor</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={leadsByBrokerData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {leadsByBrokerData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Legend wrapperStyle={{ color: "#fff" }} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function LeadsByPeriodChart() {
  return (
    <Card className="bg-slate-800 border-slate-700 col-span-2">
      <CardHeader>
        <CardTitle className="text-white">Leads por Período</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={leadsByPeriodData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="period" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="leads"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ fill: "#3B82F6", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: "#3B82F6" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function MostSearchedChart() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Imóvel Mais Procurado</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mostSearchedData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis type="number" stroke="#9CA3AF" />
            <YAxis
              dataKey="property"
              type="category"
              stroke="#9CA3AF"
              width={80}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar
              dataKey="searches"
              fill="url(#colorGradient)"
              radius={[0, 4, 4, 0]}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
