# Data, Calculation and DOCX Rules

## Validation
Warn or reject:
- refill litres <= 0
- negative fuel price/cost
- negative odometer
- end odometer < start odometer
- zero distance for completed cycle
- invalid date ordering

Incomplete records may be saved but must remain OPEN rather than inventing analytics.

## Completed cycle
Requires valid start refill, valid ending fuel-empty event, non-decreasing odometer and positive distance/fuel.

## Date-range reporting
The report must distinguish:
- events inside the selected period
- completed cycles fully contained in the period
- partial/overlapping cycles

Do not silently mix partial cycles into full-cycle averages.

## DOCX contents
1. Title
2. Reporting period
3. Vehicle
4. KPI summary
5. Fuel-event table
6. Completed-cycle analytics
7. Charts where supported
8. Available odometer photos with captions
9. Notes/exceptions
10. Generation timestamp

Resize/compress photos for reasonable document size. Never put Firebase credentials in reports.

Currency must be configurable rather than hard-coded.
