import { calculateCycleMetrics } from '../utils/calculations';

const LOCAL_STORAGE_CYCLES_KEY = 'fuel_meter_cycles';

const defaultSeedCycles = [
  {
    id: 'cycle-1',
    vehicleId: 'default-vehicle',
    startRecordId: 'rec-1',
    endRecordId: 'rec-2',
    startDateTime: '2026-08-01T08:30',
    endDateTime: '2026-08-10T17:45',
    startOdometerKm: 45000,
    endOdometerKm: 45580,
    fuelLitres: 45.0,
    fuelCost: 74.25,
    distanceKm: 580,
    kmPerLitre: 12.89,
    litresPer100Km: 7.76,
    costPerKm: 0.13,
    status: 'COMPLETED',
  },
  {
    id: 'cycle-2',
    vehicleId: 'default-vehicle',
    startRecordId: 'rec-3',
    endRecordId: null,
    startDateTime: '2026-08-10T18:00',
    endDateTime: null,
    startOdometerKm: 45582,
    endOdometerKm: null,
    fuelLitres: 48.5,
    fuelCost: 81.48,
    distanceKm: 0,
    kmPerLitre: 0,
    litresPer100Km: 0,
    costPerKm: 0,
    status: 'OPEN',
  }
];

export function getLocalCycles() {
  const data = localStorage.getItem(LOCAL_STORAGE_CYCLES_KEY);
  if (!data) {
    localStorage.setItem(LOCAL_STORAGE_CYCLES_KEY, JSON.stringify(defaultSeedCycles));
    return defaultSeedCycles;
  }
  return JSON.parse(data);
}

export function saveLocalCycles(cycles) {
  localStorage.setItem(LOCAL_STORAGE_CYCLES_KEY, JSON.stringify(cycles));
}

export async function fetchFuelCycles() {
  return getLocalCycles();
}

export async function autoSyncCycles(records) {
  const sortedRecords = [...records].sort((a, b) => new Date(a.eventDateTime) - new Date(b.eventDateTime));
  const cycles = [];

  let currentStart = null;

  for (const record of sortedRecords) {
    if (record.eventType === 'REFILL') {
      if (currentStart) {
        cycles.push({
          id: `cycle-${currentStart.id}`,
          vehicleId: 'default-vehicle',
          startRecordId: currentStart.id,
          endRecordId: null,
          startDateTime: currentStart.eventDateTime,
          endDateTime: null,
          startOdometerKm: Number(currentStart.odometerKm) || 0,
          endOdometerKm: null,
          fuelLitres: Number(currentStart.fuelLitres) || 0,
          fuelCost: Number(currentStart.totalFuelCost) || 0,
          distanceKm: 0,
          kmPerLitre: 0,
          litresPer100Km: 0,
          costPerKm: 0,
          status: 'OPEN',
        });
      }
      currentStart = record;
    } else if (record.eventType === 'FUEL_EMPTY' && currentStart) {
      const startOdo = Number(currentStart.odometerKm) || 0;
      const endOdo = Number(record.odometerKm) || 0;
      const fuelLitres = Number(currentStart.fuelLitres) || 0;
      const fuelCost = Number(currentStart.totalFuelCost) || 0;

      const metrics = calculateCycleMetrics(startOdo, endOdo, fuelLitres, fuelCost);

      cycles.push({
        id: `cycle-${currentStart.id}-${record.id}`,
        vehicleId: 'default-vehicle',
        startRecordId: currentStart.id,
        endRecordId: record.id,
        startDateTime: currentStart.eventDateTime,
        endDateTime: record.eventDateTime,
        startOdometerKm: startOdo,
        endOdometerKm: endOdo,
        fuelLitres,
        fuelCost,
        ...metrics,
        status: 'COMPLETED',
      });

      currentStart = null;
    }
  }

  if (currentStart) {
    cycles.push({
      id: `cycle-${currentStart.id}`,
      vehicleId: 'default-vehicle',
      startRecordId: currentStart.id,
      endRecordId: null,
      startDateTime: currentStart.eventDateTime,
      endDateTime: null,
      startOdometerKm: Number(currentStart.odometerKm) || 0,
      endOdometerKm: null,
      fuelLitres: Number(currentStart.fuelLitres) || 0,
      fuelCost: Number(currentStart.totalFuelCost) || 0,
      distanceKm: 0,
      kmPerLitre: 0,
      litresPer100Km: 0,
      costPerKm: 0,
      status: 'OPEN',
    });
  }

  saveLocalCycles(cycles);
  return cycles;
}
