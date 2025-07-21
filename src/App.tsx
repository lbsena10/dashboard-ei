import { DashboardHeader, KPISection } from "./components/Dashboard";
import {
  ValueRangeChart,
  LeadsByPortalChart,
  LeadsByBrokerChart,
  LeadsByPeriodChart,
  MostSearchedChart,
} from "./components/Charts";
import { ClientTable } from "./components/ClientTable";
import "./styles/globals.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <DashboardHeader />

        {/* KPI Cards */}
        <KPISection />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Value Range Chart - Full width on mobile, 1 column on desktop */}
          <div className="lg:col-span-1">
            <ValueRangeChart />
          </div>

          {/* Leads by Portal Chart */}
          <div className="lg:col-span-1">
            <LeadsByPortalChart />
          </div>

          {/* Leads by Broker Chart */}
          <div className="lg:col-span-1">
            <LeadsByBrokerChart />
          </div>
        </div>

        {/* Visits Button */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            VISITAS
          </button>
        </div>

        {/* Second Row of Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leads by Period - Spans 2 columns */}
          <div className="lg:col-span-2">
            <LeadsByPeriodChart />
          </div>

          {/* Most Searched Properties */}
          <div className="lg:col-span-1">
            <MostSearchedChart />
          </div>
        </div>

        {/* Client Data Table */}
        <div className="grid grid-cols-1 gap-6">
          <ClientTable />
        </div>
      </div>
    </div>
  );
}
