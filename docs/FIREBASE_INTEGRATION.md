# Firebase Integration

Initialize Firebase once:
```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

## Service functions
Firestore:
- createFuelRecord
- updateFuelRecord
- deleteFuelRecord
- getFuelRecordsByDateRange
- createOrUpdateFuelCycle
- getCompletedCyclesByDateRange

Storage:
- uploadOdometerPhoto
- getPhotoUrl
- deletePhoto

Keep Firebase access out of large React components.

Handle permission errors, upload failures, network errors, invalid data and missing documents. Never use Admin SDK credentials in the frontend.
