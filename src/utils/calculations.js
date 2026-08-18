/**
 * Core fuel cycle calculation utilities
 */

/**
 * Calculates metrics for a completed fuel cycle.
 * @param {number} startOdometerKm
 * @param {number} endOdometerKm
 * @param {number} fuelLitres
 * @param {number} fuelCost
 * @returns {object} Calculated cycle stats
 */
export function calculateCycleMetrics(startOdometerKm, endOdometerKm, fuelLitres, fuelCost = 0) {
  const startOdo = Number(startOdometerKm) || 0;
  const endOdo = Number(endOdometerKm) || 0;
  const litres = Number(fuelLitres) || 0;
  const cost = Number(fuelCost) || 0;

  const distanceKm = endOdo > startOdo ? endOdo - startOdo : 0;
  const kmPerLitre = litres > 0 ? distanceKm / litres : 0;
  const litresPer100Km = distanceKm > 0 ? (litres / distanceKm) * 100 : 0;
  const costPerKm = distanceKm > 0 ? cost / distanceKm : 0;

  return {
    distanceKm: Math.round(distanceKm * 100) / 100,
    kmPerLitre: Math.round(kmPerLitre * 100) / 100,
    litresPer100Km: Math.round(litresPer100Km * 100) / 100,
    costPerKm: Math.round(costPerKm * 100) / 100,
  };
}

/**
 * Calculates aggregate statistics from an array of fuel records and cycles.
 * @param {Array} records
 * @param {Array} cycles
 * @returns {object} Summary stats
 */
export function calculateSummaryMetrics(records = [], cycles = []) {
  const totalFuelLitres = records.reduce((acc, r) => acc + (r.eventType === 'REFILL' ? (Number(r.fuelLitres) || 0) : 0), 0);
  const totalCost = records.reduce((acc, r) => acc + (Number(r.totalFuelCost) || 0), 0);

  const completedCycles = cycles.filter(c => c.status === 'COMPLETED');
  const openCycles = cycles.filter(c => c.status === 'OPEN');

  const totalDistanceKm = completedCycles.reduce((acc, c) => acc + (Number(c.distanceKm) || 0), 0);
  const totalCycleFuel = completedCycles.reduce((acc, c) => acc + (Number(c.fuelLitres) || 0), 0);

  const avgKmPerLitre = totalCycleFuel > 0 ? totalDistanceKm / totalCycleFuel : 0;
  const avgLitresPer100Km = totalDistanceKm > 0 ? (totalCycleFuel / totalDistanceKm) * 100 : 0;
  const avgCostPerKm = totalDistanceKm > 0 ? totalCost / totalDistanceKm : 0;

  return {
    totalFuelLitres: Math.round(totalFuelLitres * 100) / 100,
    totalCost: Math.round(totalCost * 100) / 100,
    totalDistanceKm: Math.round(totalDistanceKm * 100) / 100,
    avgKmPerLitre: Math.round(avgKmPerLitre * 100) / 100,
    avgLitresPer100Km: Math.round(avgLitresPer100Km * 100) / 100,
    avgCostPerKm: Math.round(avgCostPerKm * 100) / 100,
    completedCyclesCount: completedCycles.length,
    openCyclesCount: openCycles.length,
  };
}
