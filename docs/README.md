# Fuel Meter Website
A React/Vite website for manual fuel tracking, fuel-cycle analytics, odometer evidence photos, history, and DOCX reporting.

## Architecture
- Frontend: React + Vite
- Database: Firebase Firestore
- Photos: Firebase Storage
- Authentication: none initially
- Custom backend: none
- Reports: browser-generated DOCX

## Core flow
Dashboard -> Add Fuel -> Fuel Cycle -> History -> Analytics -> Reports

A refill is an event. A completed fuel cycle connects a refill/start odometer with a fuel-empty/end odometer. Consumption analytics should primarily use completed cycles.
