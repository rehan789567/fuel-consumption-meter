import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LineChart as AnalyticsIcon, TrendingUp, DollarSign, Fuel, Gauge } from 'lucide-react';
import { formatDate, formatCurrency } from '../utils/formatters';

export default function Analytics({ cycles, records, currency }) {
  const completedCycles = cycles.filter((c) => c.status === 'COMPLETED');

  const consumptionChartData = completedCycles.map((c) => ({
    date: formatDate(c.startDateTime),
    distance: c.distanceKm,
    kmPerLitre: c.kmPerLitre,
    litresPer100Km: c.litresPer100Km,
  }));

  const priceTrendData = records
    .filter((r) => r.eventType === 'REFILL' && r.fuelPricePerLitre > 0)
    .sort((a, b) => new Date(a.eventDateTime) - new Date(b.eventDateTime))
    .map((r) => ({
      date: formatDate(r.eventDateTime),
      price: r.fuelPricePerLitre,
      litres: r.fuelLitres,
    }));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <AnalyticsIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          Consumption & Price Trends
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Visualizing fuel efficiency (km/L, L/100km), distance driven per cycle, and market fuel price trends
        </p>
      </div>

      {completedCycles.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center text-slate-500 text-sm">
          No completed fuel cycles available yet to plot trend charts.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Fuel Efficiency Chart */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                Fuel Efficiency Trend (km/L)
              </h3>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={consumptionChartData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="kmPerLitre" name="km / Litre" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Distance Driven per Cycle Chart */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Gauge className="w-4 h-4 text-blue-500" />
                Distance Driven per Cycle (km)
              </h3>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={consumptionChartData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="distance" name="Distance (km)" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Fuel Price Trend Chart */}
          {priceTrendData.length > 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-4 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-amber-500" />
                  Fuel Price Trend ({currency} / L)
                </h3>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceTrendData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" name={`Price (${currency})`} stroke="#f59e0b" strokeWidth={3} dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
