# Development Setup

## Prerequisites
- Node.js LTS
- npm
- Git
- Firebase account

## Create frontend
```bash
npm create vite@latest fuel-meter-web -- --template react
cd fuel-meter-web
npm install
npm install firebase
```

Add report and chart libraries during implementation.

## Environment
Create `.env.local`:
```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

Never put a Firebase service-account private key in the browser.

## Run
```bash
npm run dev
```

## Build
```bash
npm run build
```
