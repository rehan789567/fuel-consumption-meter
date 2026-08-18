import React, { useState } from 'react';
import { History as HistoryIcon, Filter, Trash2, Edit2, Image, X, Fuel, CheckCircle2, FileText } from 'lucide-react';
import { formatDate, formatDateTime, formatCurrency } from '../utils/formatters';
import { deleteFuelRecord } from '../services/fuelRecords';

export default function History({ records, currency, onRecordDeleted }) {
  const [filterType, setFilterType] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const filteredRecords = records.filter((r) => {
    if (filterType !== 'ALL' && r.eventType !== filterType) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const notesMatch = r.notes && r.notes.toLowerCase().includes(q);
      const odoMatch = r.odometerKm && r.odometerKm.toString().includes(q);
      return notesMatch || odoMatch;
    }
    return true;
  });

  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      await deleteFuelRecord(id);
      if (onRecordDeleted) onRecordDeleted();
    } catch (e) {
      console.error(e);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header and Filters */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HistoryIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Event History Log
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Complete chronological list of refills, fuel empty indicators, and manual log notes
            </p>
          </div>

          {/* Type Filter Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            {['ALL', 'REFILL', 'FUEL_EMPTY', 'NOTE'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filterType === type
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {type === 'ALL' ? 'All Events' : type}
              </button>
            ))}
          </div>
        </div>

        {/* Search input */}
        <div>
          <input
            type="text"
            placeholder="Search by notes or odometer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:max-w-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
      </div>

      {/* Table View */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
        {filteredRecords.length === 0 ? (
          <div className="p-12 text-center text-slate-500 text-sm">No records match your filter criteria.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs uppercase font-medium">
                <tr>
                  <th className="px-6 py-3.5">Date & Time</th>
                  <th className="px-6 py-3.5">Event Type</th>
                  <th className="px-6 py-3.5">Odometer</th>
                  <th className="px-6 py-3.5">Volume (L)</th>
                  <th className="px-6 py-3.5">Total Cost</th>
                  <th className="px-6 py-3.5">Photo</th>
                  <th className="px-6 py-3.5">Notes</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredRecords.map((rec) => (
                  <tr key={rec.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">
                      {formatDateTime(rec.eventDateTime)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
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
                        {rec.eventType === 'NOTE' && <FileText className="w-3 h-3" />}
                        {rec.eventType}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 whitespace-nowrap font-medium">
                      {rec.odometerKm ? `${rec.odometerKm.toLocaleString()} km` : '-'}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                      {rec.fuelLitres ? `${rec.fuelLitres} L` : '-'}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 whitespace-nowrap font-semibold">
                      {rec.totalFuelCost ? formatCurrency(rec.totalFuelCost, currency) : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {rec.odometerPhotoUrl ? (
                        <button
                          onClick={() => setSelectedPhoto(rec.odometerPhotoUrl)}
                          className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          <Image className="w-3.5 h-3.5" /> View Photo
                        </button>
                      ) : (
                        <span className="text-slate-400 text-xs">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-xs max-w-xs truncate">
                      {rec.notes || '-'}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(rec.id)}
                        disabled={deletingId === rec.id}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-lg transition-colors"
                        title="Delete record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Lightbox Photo Preview Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 p-2">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 hover:bg-slate-800 text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedPhoto} alt="Odometer evidence photo" className="w-full max-h-[80vh] object-contain rounded-xl" />
          </div>
        </div>
      )}
    </div>
  );
}
