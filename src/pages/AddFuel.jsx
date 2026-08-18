import React, { useState } from 'react';
import { Fuel, Upload, Camera, Save, AlertCircle, X, Check } from 'lucide-react';
import { validateFuelRecord } from '../utils/validation';
import { getCurrentISOString } from '../utils/date';
import { createFuelRecord } from '../services/fuelRecords';
import { uploadOdometerPhoto } from '../services/photos';

export default function AddFuel({ currency, onRecordAdded }) {
  const [eventType, setEventType] = useState('REFILL');
  const [eventDateTime, setEventDateTime] = useState(getCurrentISOString());
  const [fuelLitres, setFuelLitres] = useState('');
  const [fuelPricePerLitre, setFuelPricePerLitre] = useState('');
  const [totalFuelCost, setTotalFuelCost] = useState('');
  const [odometerKm, setOdometerKm] = useState('');
  const [notes, setNotes] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleLitresChange = (val) => {
    setFuelLitres(val);
    if (val && fuelPricePerLitre) {
      setTotalFuelCost((parseFloat(val) * parseFloat(fuelPricePerLitre)).toFixed(2));
    }
  };

  const handlePriceChange = (val) => {
    setFuelPricePerLitre(val);
    if (val && fuelLitres) {
      setTotalFuelCost((parseFloat(fuelLitres) * parseFloat(val)).toFixed(2));
    }
  };

  const handlePhotoSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');

    const formData = {
      eventDateTime,
      eventType,
      fuelLitres,
      fuelPricePerLitre,
      totalFuelCost,
      odometerKm,
      notes,
    };

    const validation = validateFuelRecord(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      let photoUrl = '';
      const tempId = 'rec-' + Date.now();

      if (photoFile) {
        photoUrl = await uploadOdometerPhoto(photoFile, tempId);
      }

      const newRecordData = {
        vehicleId: 'default-vehicle',
        eventType,
        eventDateTime,
        fuelLitres: fuelLitres ? parseFloat(fuelLitres) : 0,
        fuelPricePerLitre: fuelPricePerLitre ? parseFloat(fuelPricePerLitre) : 0,
        totalFuelCost: totalFuelCost ? parseFloat(totalFuelCost) : 0,
        odometerKm: odometerKm ? parseFloat(odometerKm) : 0,
        odometerPhotoUrl: photoUrl,
        notes,
      };

      await createFuelRecord(newRecordData);
      setSuccessMessage('Fuel record saved successfully!');

      // Reset form
      setFuelLitres('');
      setFuelPricePerLitre('');
      setTotalFuelCost('');
      setOdometerKm('');
      setNotes('');
      setPhotoFile(null);
      setPhotoPreview(null);

      if (onRecordAdded) onRecordAdded();
    } catch (err) {
      console.error(err);
      setErrors({ submit: 'Failed to save record. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm p-6 sm:p-8">
        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-5 mb-6">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/60 rounded-xl text-indigo-600 dark:text-indigo-400">
            <Fuel className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Record Fuel Event</h2>
            <p className="text-xs text-slate-500">Add refill details, odometer reading, or fuel empty status</p>
          </div>
        </div>

        {successMessage && (
          <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center gap-2 text-sm font-medium">
            <Check className="w-5 h-5 text-emerald-600" />
            {successMessage}
          </div>
        )}

        {errors.submit && (
          <div className="mb-6 p-4 bg-red-50 text-red-800 dark:bg-red-950/60 dark:text-red-300 rounded-xl border border-red-200 dark:border-red-800 flex items-center gap-2 text-sm font-medium">
            <AlertCircle className="w-5 h-5 text-red-600" />
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Type Switcher */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Event Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'REFILL', label: 'Refill Fuel' },
                { id: 'FUEL_EMPTY', label: 'Fuel Empty' },
                { id: 'NOTE', label: 'General Note' },
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setEventType(type.id)}
                  className={`py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-xl border transition-all ${
                    eventType === type.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/80'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Date & Time */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Date & Time
            </label>
            <input
              type="datetime-local"
              value={eventDateTime}
              onChange={(e) => setEventDateTime(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            {errors.eventDateTime && <p className="text-xs text-red-500 mt-1">{errors.eventDateTime}</p>}
          </div>

          {/* Refill Numeric Inputs */}
          {eventType === 'REFILL' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Fuel Added (L)
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g. 45.0"
                  value={fuelLitres}
                  onChange={(e) => handleLitresChange(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                {errors.fuelLitres && <p className="text-xs text-red-500 mt-1">{errors.fuelLitres}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Price / Litre ({currency})
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g. 1.65"
                  value={fuelPricePerLitre}
                  onChange={(e) => handlePriceChange(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Total Cost ({currency})
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g. 74.25"
                  value={totalFuelCost}
                  onChange={(e) => setTotalFuelCost(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none font-semibold text-indigo-600 dark:text-indigo-400"
                />
              </div>
            </div>
          )}

          {/* Odometer Reading */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Odometer Reading (km)
            </label>
            <input
              type="number"
              placeholder="e.g. 45580"
              value={odometerKm}
              onChange={(e) => setOdometerKm(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            {errors.odometerKm && <p className="text-xs text-red-500 mt-1">{errors.odometerKm}</p>}
          </div>

          {/* Odometer Photo Upload Dropzone */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Odometer Photo Evidence
            </label>
            {photoPreview ? (
              <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 max-h-48 bg-slate-900">
                <img src={photoPreview} alt="Odometer evidence preview" className="w-full h-48 object-cover" />
                <button
                  type="button"
                  onClick={() => {
                    setPhotoFile(null);
                    setPhotoPreview(null);
                  }}
                  className="absolute top-2 right-2 p-1.5 bg-slate-900/80 text-white rounded-full hover:bg-slate-900"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors bg-slate-50/50 dark:bg-slate-800/50">
                <Camera className="w-8 h-8 text-slate-400 mb-2" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Click or drop image to upload evidence photo
                </span>
                <input type="file" accept="image/*" onChange={handlePhotoSelect} className="hidden" />
              </label>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Notes / Location
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Highway trip refill, Shell Station"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {isSubmitting ? 'Saving Record...' : 'Save Fuel Record'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
