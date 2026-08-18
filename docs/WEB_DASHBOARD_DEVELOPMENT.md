# Web Dashboard Development

## Pages
1. Dashboard
2. Add Fuel
3. History
4. Fuel Cycles
5. Analytics
6. Reports

## Dashboard
Show KPI cards for fuel, cost, distance, average km/L and cost/km. Include recent activity, open cycles and charts.

## Add Fuel
Support REFILL, FUEL_EMPTY and NOTE. Validate numeric values and dates. Allow odometer photo upload.

## History
Use Firestore date filtering rather than downloading an unbounded collection to the browser.

## Analytics
Calculate core consumption metrics from completed cycles. Partial cycles must be clearly identified.

## UX
Responsive layout, consistent units, loading/empty/error states, confirmation for destructive actions, and preservation of entered data after upload failures where practical.
