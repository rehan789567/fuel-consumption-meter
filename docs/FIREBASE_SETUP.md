# Firebase Setup

Enable:
1. Cloud Firestore
2. Firebase Storage

Authentication is not required for the initial product.

## Firestore
Create the database and apply reviewed security rules. Do not deploy permanently public read/write rules.

## Storage
Store meter/odometer photos, for example:
```text
vehicles/{vehicleId}/fuel-records/{recordId}/start-meter.jpg
vehicles/{vehicleId}/fuel-records/{recordId}/end-meter.jpg
```

## Client configuration
The Firebase Web App configuration is used by the frontend. Never expose service-account private keys or Admin SDK credentials.

Because there is no login, strong per-user access control is not possible. Treat public deployment as a security decision; add Firebase Authentication before storing private multi-user data.
