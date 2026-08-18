import { describe, it, expect } from 'vitest';
import { calculateCycleMetrics, calculateSummaryMetrics } from '../calculations';

describe('calculateCycleMetrics', () => {
  it('calculates cycle metrics correctly for valid inputs', () => {
    const result = calculateCycleMetrics(1000, 1500, 40, 60);
    expect(result.distanceKm).toBe(500);
    expect(result.kmPerLitre).toBe(12.5);
    expect(result.litresPer100Km).toBe(8);
    expect(result.costPerKm).toBe(0.12);
  });

  it('handles zero fuel or distance without throwing errors', () => {
    const result = calculateCycleMetrics(1000, 1000, 0, 0);
    expect(result.distanceKm).toBe(0);
    expect(result.kmPerLitre).toBe(0);
    expect(result.litresPer100Km).toBe(0);
    expect(result.costPerKm).toBe(0);
  });
});

describe('calculateSummaryMetrics', () => {
  it('calculates totals and averages from records and completed cycles', () => {
    const records = [
      { eventType: 'REFILL', fuelLitres: 40, totalFuelCost: 60 },
      { eventType: 'REFILL', fuelLitres: 50, totalFuelCost: 75 },
    ];
    const cycles = [
      { status: 'COMPLETED', distanceKm: 500, fuelLitres: 40 },
      { status: 'OPEN', distanceKm: 0, fuelLitres: 50 },
    ];

    const summary = calculateSummaryMetrics(records, cycles);
    expect(summary.totalFuelLitres).toBe(90);
    expect(summary.totalCost).toBe(135);
    expect(summary.totalDistanceKm).toBe(500);
    expect(summary.avgKmPerLitre).toBe(12.5);
    expect(summary.completedCyclesCount).toBe(1);
    expect(summary.openCyclesCount).toBe(1);
  });
});
