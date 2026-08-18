import React from 'react';
import { Gauge, Fuel, DollarSign, RefreshCw, PlusCircle, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { calculateSummaryMetrics } from '../utils/calculations';
import { formatCurrency, formatDate } from '../utils/formatters';

export default function Dashboard({ records, cycles, currency, onNavigateToAddFuel, onNavigateToCycles }) {
  const summary = calculateSummaryMetrics(records, cycles);
  const openCycles = cycles.filter((c) => c.status === 'OPEN');
  const recentRecords = [...records].slice(0, 5);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Banner / Welcome */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6 md:p-8 rounded-2xl shadow-xl shadow-indigo-950/10 border border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-indigo-500/30">
            Fuel Intelligence Dashboard
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Vehicle Fuel Analytics
          </h1>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Track refills, compute exact fuel cycle consumption, log odometer photos, and export DOCX reports.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onNavigateToAddFuel}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition-all transform active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            Add Refill
          </button>
          {openCycles.length > 0 && (
            <button
              onClick={onNavigateToCycles}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm rounded-xl border border-slate-700 transition-all transform active:scale-95"
            >
              <RefreshCw className="w-4 h-4 text-amber-400" />
              Close Fuel Cycle ({openCycles.length})
            </button>
          )}
        </div>
      </div>

      {/* Open Cycle Notification Banner */}
      {openCycles.length > 0 && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 rounded-lg text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                You have {openCycles.length} active (open) fuel cycle{openCycles.length > 1 ? 's' : ''}
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-300 mt-0.5">
                Log a "Fuel Empty" event or close cycle when your tank hits reserve to complete cycle analytics.
              </p>
            </div>
          </div>
          <button
            onClick={onNavigateToCycles}
            className="text-xs font-semibold text-amber-700 dark:text-amber-300 hover:underline flex items-center gap-1 whitespace-nowrap"
          >
            Manage Cycles <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Total Distance
            </span>
            <div className="p-2.5 bg-blue-50 dark:bg-blue-950/50 rounded-xl text-blue-600 dark:text-blue-400">
              <Gauge className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {summary.totalDistanceKm} <span className="text-sm font-normal text-slate-500">km</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Across completed cycles</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Total Fuel Added
            </span>
            <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl text-emerald-600 dark:text-emerald-400">
              <Fuel className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {summary.totalFuelLitres} <span className="text-sm font-normal text-slate-500">L</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Total volume refilled</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Avg Consumption
            </span>
            <div className="p-2.5 bg-violet-50 dark:bg-violet-950/50 rounded-xl text-violet-600 dark:text-violet-400">
              <RefreshCw className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {summary.avgKmPerLitre} <span className="text-sm font-normal text-slate-500">km/L</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              ({summary.avgLitresPer100Km} L/100 km)
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Total Spend
            </span>
            <div className="p-2.5 bg-amber-50 dark:bg-amber-950/50 rounded-xl text-amber-600 dark:text-amber-400">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {formatCurrency(summary.totalCost, currency)}
            </div>
            <p className="text-xs text-slate-500 mt-1">Avg {formatCurrency(summary.avgCostPerKm, currency)}/km</p>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">Recent Activity</h3>
            <p className="text-xs text-slate-500">Latest recorded fuel events and notes</p>
          </div>
          <button
            onClick={onNavigateToAddFuel}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            + Add New
          </button>
        </div>

        {recentRecords.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm">No fuel records found. Log your first refill!</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs uppercase font-medium">
                <tr>
                  <th className="px-6 py-3">Date & Time</th>
                  <th className="px-6 py-3">Event Type</th>
                  <th className="px-6 py-3">Odometer</th>
                  <th className="px-6 py-3">Litres</th>
                  <th className="px-6 py-3">Total Cost</th>
                  <th className="px-6 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {recentRecords.map((rec) => (
                  <tr key={rec.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">
                      {formatDate(rec.eventDateTime)}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          rec.eventType === 'REFILL'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
                            : rec.eventType === 'FUEL_EMPTY'
                            ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                        }`}
                      >
                        {rec.eventType === 'REFILL' && <Fuel className="w-3 h-3" />}
                        {rec.eventType === 'FUEL_EMPTY' && <CheckCircle2 className="w-3 h-3" />}
                        {rec.eventType}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {rec.odometerKm ? `${rec.odometerKm.toLocaleString()} km` : '-'}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {rec.fuelLitres ? `${rec.fuelLitres} L` : '-'}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 font-medium">
                      {rec.totalFuelCost ? formatCurrency(rec.totalFuelCost, currency) : '-'}
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-xs max-w-xs truncate">
                      {rec.notes || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
