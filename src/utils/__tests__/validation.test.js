import { describe, it, expect } from 'vitest';
import { validateFuelRecord, validateCycleClosure } from '../validation';

describe('validateFuelRecord', () => {
  it('validates a correct REFILL record', () => {
    const record = {
      eventDateTime: '2026-08-18T10:00',
      eventType: 'REFILL',
      fuelLitres: '45.5',
      fuelPricePerLitre: '1.50',
      totalFuelCost: '68.25',
      odometerKm: '12500',
    };
    const result = validateFuelRecord(record);
    expect(result.isValid).toBe(true);
    expect(Object.keys(result.errors)).toHaveLength(0);
  });

  it('rejects REFILL record with invalid fuel litres', () => {
    const record = {
      eventDateTime: '2026-08-18T10:00',
      eventType: 'REFILL',
      fuelLitres: '-5',
    };
    const result = validateFuelRecord(record);
    expect(result.isValid).toBe(false);
    expect(result.errors.fuelLitres).toBeDefined();
  });
});

describe('validateCycleClosure', () => {
  it('rejects cycle closure if end odometer is less than start odometer', () => {
    const start = { odometerKm: 5000, eventDateTime: '2026-08-10T10:00' };
    const end = { odometerKm: 4800, eventDateTime: '2026-08-15T10:00' };
    const result = validateCycleClosure(start, end);
    expect(result.isValid).toBe(false);
    expect(result.errors.odometerKm).toBeDefined();
  });
});
