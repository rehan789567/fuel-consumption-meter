import React, { useState } from 'react';
import { FileText, Download, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { generateDocxReport } from '../services/reports';
import { calculateSummaryMetrics } from '../utils/calculations';
import { formatCurrency } from '../utils/formatters';

export default function Reports({ records, cycles, currency }) {
  const [startDate, setStartDate] = useState('2026-08-01');
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSuccess, setGeneratedSuccess] = useState(false);

  const filteredRecords = records.filter((r) => {
    const d = r.eventDateTime ? r.eventDateTime.slice(0, 10) : '';
    return d >= startDate && d <= endDate;
  });

  const filteredCycles = cycles.filter((c) => {
    const d = c.startDateTime ? c.startDateTime.slice(0, 10) : '';
    return d >= startDate && d <= endDate;
  });

  const summary = calculateSummaryMetrics(filteredRecords, filteredCycles);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    setGeneratedSuccess(false);

    try {
      await generateDocxReport({
        startDate,
        endDate,
        currency,
        records: filteredRecords,
        cycles: filteredCycles,
      });
      setGeneratedSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-5">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/60 rounded-xl text-indigo-600 dark:text-indigo-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">DOCX Executive Report Generator</h2>
            <p className="text-xs text-slate-500">
              Generate formatted DOCX reports containing KPI summaries, complete fuel logs, and cycle analytics
            </p>
          </div>
        </div>

        {/* Date Range Selector */}
        <form onSubmit={handleGenerate} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                From Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                To Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          {/* Report Preview Metrics */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Included in this Report</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block">Records Logged</span>
                <span className="font-semibold text-slate-900 dark:text-white">{filteredRecords.length} items</span>
              </div>
              <div>
                <span className="text-slate-400 block">Distance Covered</span>
                <span className="font-semibold text-slate-900 dark:text-white">{summary.totalDistanceKm} km</span>
              </div>
              <div>
                <span className="text-slate-400 block">Fuel Consumption</span>
                <span className="font-semibold text-slate-900 dark:text-white">{summary.totalFuelLitres} L</span>
              </div>
              <div>
                <span className="text-slate-400 block">Total Expenditure</span>
                <span className="font-semibold text-slate-900 dark:text-white">{formatCurrency(summary.totalCost, currency)}</span>
              </div>
            </div>
          </div>

          {generatedSuccess && (
            <div className="p-4 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              DOCX Report generated and downloaded successfully!
            </div>
          )}

          {/* Download CTA Button */}
          <button
            type="submit"
            disabled={isGenerating || filteredRecords.length === 0}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            {isGenerating ? 'Generating DOCX File...' : 'Download DOCX Report'}
          </button>
        </form>
      </div>
    </div>
  );
}
