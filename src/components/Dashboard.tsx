import { Card, CardContent } from "./ui/card";
import {
  TrendingUp,
  TrendingDown,
  Home,
  Users,
  Eye,
  DollarSign,
} from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

function KPICard({
  title,
  value,
  icon,
  trend = "neutral",
  className = "",
}: KPICardProps) {
  const trendIcon =
    trend === "up" ? (
      <TrendingUp className="w-4 h-4 text-green-400" />
    ) : trend === "down" ? (
      <TrendingDown className="w-4 h-4 text-red-400" />
    ) : null;

  return (
    <Card
      className={`bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all duration-300 ${className}`}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">{icon}</div>
            <div>
              <p className="text-slate-400 text-sm">{title}</p>
              <p className="text-white text-2xl font-semibold">{value}</p>
            </div>
          </div>
          {trendIcon}
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardHeader() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-6 rounded-lg mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Relatório de Locação
          </h1>
          <p className="text-slate-300">
            Dashboard de Performance - Janeiro 2025
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-700">
            <option>Todos</option>
            <option>Casa</option>
            <option>Apartamento</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export function KPISection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <KPICard
        title="Valor Total"
        value="R$ 54.9 Mi"
        icon={<DollarSign className="w-6 h-6 text-blue-400" />}
        trend="up"
        className="xl:col-span-1"
      />
      <KPICard
        title="Maior Valor"
        value="R$ 563.21 Mi"
        icon={<TrendingUp className="w-6 h-6 text-green-400" />}
        trend="up"
        className="xl:col-span-1"
      />
      <KPICard
        title="Menor Valor"
        value="R$ 0"
        icon={<TrendingDown className="w-6 h-6 text-red-400" />}
        trend="down"
        className="xl:col-span-1"
      />
      <KPICard
        title="Valor Médio"
        value="R$ 1.29 Mil"
        icon={<DollarSign className="w-6 h-6 text-yellow-400" />}
        trend="neutral"
        className="xl:col-span-1"
      />
      <KPICard
        title="Qtd Imóveis"
        value="1,355"
        icon={<Home className="w-6 h-6 text-purple-400" />}
        trend="up"
        className="xl:col-span-1"
      />
      <KPICard
        title="Qtd Leads"
        value="5,489"
        icon={<Users className="w-6 h-6 text-orange-400" />}
        trend="up"
        className="xl:col-span-1"
      />
    </div>
  );
}
