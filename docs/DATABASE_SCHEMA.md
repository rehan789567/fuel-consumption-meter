# Firestore Database Schema

## vehicles/{vehicleId}
- name
- registrationLabel (optional)
- make (optional)
- model (optional)
- createdAt

## fuelRecords/{recordId}
- vehicleId
- eventType: REFILL | FUEL_EMPTY | NOTE
- eventDateTime
- fuelLitres (required for REFILL)
- fuelPricePerLitre
- totalFuelCost
- odometerKm
- odometerPhotoPath
- odometerPhotoUrl
- receiptPhotoPath (optional)
- notes
- createdAt
- updatedAt

## fuelCycles/{cycleId}
- vehicleId
- startRecordId
- endRecordId
- startDateTime
- endDateTime
- startOdometerKm
- endOdometerKm
- fuelLitres
- fuelCost
- distanceKm
- kmPerLitre
- litresPer100Km
- costPerKm
- status: OPEN | COMPLETED
- createdAt
- updatedAt

## Calculations
distanceKm = endOdometerKm - startOdometerKm
kmPerLitre = distanceKm / fuelLitres
litresPer100Km = (fuelLitres / distanceKm) * 100
costPerKm = fuelCost / distanceKm

Never replace original user-entered values with derived values.
