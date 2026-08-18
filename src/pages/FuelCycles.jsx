import React, { useState } from 'react';
import { RefreshCw, CheckCircle, AlertCircle, ArrowRight, Gauge, Fuel, Calendar, DollarSign, X } from 'lucide-react';
import { formatDate, formatCurrency } from '../utils/formatters';
import { validateCycleClosure } from '../utils/validation';
import { createFuelRecord } from '../services/fuelRecords';
import { getCurrentISOString } from '../utils/date';

export default function FuelCycles({ cycles, records, currency, onCycleUpdated }) {
  const openCycles = cycles.filter((c) => c.status === 'OPEN');
  const completedCycles = cycles.filter((c) => c.status === 'COMPLETED');

  const [closingCycle, setClosingCycle] = useState(null);
  const [endOdometer, setEndOdometer] = useState('');
  const [endDateTime, setEndDateTime] = useState(getCurrentISOString());
  const [closeError, setCloseError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCloseCycleSubmit = async (e) => {
    e.preventDefault();
    setCloseError('');

    const startRecord = records.find((r) => r.id === closingCycle.startRecordId);
    const mockEndRecord = {
      odometerKm: endOdometer,
      eventDateTime: endDateTime,
    };

    const validation = validateCycleClosure(startRecord, mockEndRecord);
    if (!validation.isValid) {
      setCloseError(validation.errors.odometerKm || validation.errors.eventDateTime || 'Invalid cycle closure data');
      return;
    }

    setIsSubmitting(true);
    try {
      await createFuelRecord({
        vehicleId: 'default-vehicle',
        eventType: 'FUEL_EMPTY',
        eventDateTime: endDateTime,
        fuelLitres: 0,
        fuelPricePerLitre: 0,
        totalFuelCost: 0,
        odometerKm: parseFloat(endOdometer),
        notes: `Cycle closure for refill on ${formatDate(closingCycle.startDateTime)}`,
      });

      setClosingCycle(null);
      setEndOdometer('');
      if (onCycleUpdated) onCycleUpdated();
    } catch (err) {
      console.error(err);
      setCloseError('Failed to close cycle. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Description */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Fuel Cycles Analytics
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl">
            A full fuel cycle starts at a refill event and ends when the fuel tank reaches empty/reserve. Completed cycle analytics measure true distance driven per fuel unit.
          </p>
        </div>
      </div>

      {/* Active / Open Cycles */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Active Open Cycles ({openCycles.length})
        </h3>

        {openCycles.length === 0 ? (
          <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 rounded-2xl p-6 text-center text-emerald-800 dark:text-emerald-300 text-sm">
            <CheckCircle className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
            All fuel cycles are currently closed! Log a new refill to start a new cycle.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openCycles.map((cycle) => (
              <div
                key={cycle.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-amber-200 dark:border-amber-900/50 p-5 shadow-sm space-y-4 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-amber-500" />
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                    <RefreshCw className="w-3 h-3 animate-spin" /> Open Cycle
                  </span>
                  <span className="text-xs text-slate-500">{formatDate(cycle.startDateTime)}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-xs text-slate-500 block">Start Odometer</span>
                    <span className="font-bold text-slate-900 dark:text-white">{cycle.startOdometerKm} km</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Fuel Refilled</span>
                    <span className="font-bold text-slate-900 dark:text-white">{cycle.fuelLitres} L</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setClosingCycle(cycle);
                    setEndOdometer(cycle.startOdometerKm + 450); // initial suggestion
                  }}
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Close Cycle (Log Fuel Empty)
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Close Cycle Modal */}
      {closingCycle && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-bold text-slate-900 dark:text-white">Close Fuel Cycle</h3>
              <button
                onClick={() => setClosingCycle(null)}
                className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {closeError && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {closeError}
              </div>
            )}

            <form onSubmit={handleCloseCycleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Cycle End Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={endDateTime}
                  onChange={(e) => setEndDateTime(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Ending Odometer Reading (km)
                </label>
                <input
                  type="number"
                  placeholder={`Must be > ${closingCycle.startOdometerKm}`}
                  value={endOdometer}
                  onChange={(e) => setEndOdometer(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
                />
                <span className="text-xs text-slate-400 mt-1 block">
                  Start reading was {closingCycle.startOdometerKm} km
                </span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setClosingCycle(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? 'Closing Cycle...' : 'Confirm Closure'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Completed Cycles History */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Completed Cycles Log ({completedCycles.length})
        </h3>

        {completedCycles.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 text-center text-slate-500 text-sm">
            No completed cycles yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {completedCycles.map((cycle) => (
              <div
                key={cycle.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    <span>
                      {formatDate(cycle.startDateTime)} → {formatDate(cycle.endDateTime)}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                    <CheckCircle className="w-3 h-3" /> Completed
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-xs text-slate-500 block">Distance Covered</span>
                    <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                      <Gauge className="w-4 h-4 text-blue-500" /> {cycle.distanceKm} km
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Fuel Consumption</span>
                    <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                      <Fuel className="w-4 h-4 text-emerald-500" /> {cycle.kmPerLitre} km/L
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Litre Efficiency</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {cycle.litresPer100Km} L/100km
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Cost Efficiency</span>
                    <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-amber-500" /> {formatCurrency(cycle.costPerKm, currency)}
                      /km
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
