# Deployment

Build:
```bash
npm run build
```

Before production:
- review Firestore rules
- review Storage rules
- deploy required indexes
- test date ranges
- test photo uploads
- test DOCX reports
- test open/completed cycles
- test deletion and replacement of photos
- test responsive UI
- test error states

## No custom backend
Version 1 uses Firebase client SDKs directly from the frontend.

## Security
Without authentication, public deployment cannot provide strong per-user isolation. If the website becomes multi-user or contains private records, add Firebase Authentication and user-scoped Firestore/Storage rules.
