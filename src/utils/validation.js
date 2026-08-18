/**
 * Input validation utilities for fuel tracking
 */

export function validateFuelRecord(data) {
  const errors = {};

  if (!data.eventDateTime) {
    errors.eventDateTime = "Date and time are required.";
  }

  if (data.eventType === 'REFILL') {
    if (!data.fuelLitres || Number(data.fuelLitres) <= 0) {
      errors.fuelLitres = "Fuel volume must be greater than 0.";
    }
  }

  if (data.fuelPricePerLitre !== undefined && data.fuelPricePerLitre !== '') {
    if (Number(data.fuelPricePerLitre) < 0) {
      errors.fuelPricePerLitre = "Price cannot be negative.";
    }
  }

  if (data.totalFuelCost !== undefined && data.totalFuelCost !== '') {
    if (Number(data.totalFuelCost) < 0) {
      errors.totalFuelCost = "Total cost cannot be negative.";
    }
  }

  if (data.odometerKm !== undefined && data.odometerKm !== '') {
    if (Number(data.odometerKm) < 0) {
      errors.odometerKm = "Odometer reading cannot be negative.";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateCycleClosure(startRecord, endRecord) {
  const errors = {};

  if (!startRecord || !endRecord) {
    errors.general = "Both start refill and end fuel-empty events are required.";
    return { isValid: false, errors };
  }

  const startOdo = Number(startRecord.odometerKm) || 0;
  const endOdo = Number(endRecord.odometerKm) || 0;

  if (endOdo <= startOdo) {
    errors.odometerKm = `End odometer (${endOdo} km) must be greater than start odometer (${startOdo} km).`;
  }

  const startDate = new Date(startRecord.eventDateTime);
  const endDate = new Date(endRecord.eventDateTime);

  if (endDate <= startDate) {
    errors.eventDateTime = "Cycle end date/time must be after cycle start date/time.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
