# Project Structure

```text
src/
  app/
  components/
    layout/
    forms/
    tables/
    charts/
    common/
  pages/
    Dashboard/
    AddFuel/
    History/
    FuelCycles/
    Analytics/
    Reports/
  firebase/
    config.js
    firestore.js
    storage.js
  services/
    fuelRecords.js
    fuelCycles.js
    analytics.js
    photos.js
    reports.js
  utils/
    calculations.js
    validation.js
    date.js
    formatters.js
  hooks/
  styles/
  main.jsx
public/
docs/
```

Keep Firebase queries inside services rather than directly in UI components.
