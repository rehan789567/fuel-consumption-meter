import { db, isFirebaseConfigured } from '../firebase/config';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';

const LOCAL_STORAGE_RECORDS_KEY = 'fuel_meter_records';

const defaultSeedRecords = [
  {
    id: 'rec-1',
    vehicleId: 'default-vehicle',
    eventType: 'REFILL',
    eventDateTime: '2026-08-01T08:30',
    fuelLitres: 45.0,
    fuelPricePerLitre: 1.65,
    totalFuelCost: 74.25,
    odometerKm: 45000,
    odometerPhotoUrl: '',
    notes: 'Full tank start of month',
    createdAt: new Date('2026-08-01T08:30').toISOString(),
  },
  {
    id: 'rec-2',
    vehicleId: 'default-vehicle',
    eventType: 'FUEL_EMPTY',
    eventDateTime: '2026-08-10T17:45',
    fuelLitres: 0,
    fuelPricePerLitre: 0,
    totalFuelCost: 0,
    odometerKm: 45580,
    odometerPhotoUrl: '',
    notes: 'Low fuel warning indicator',
    createdAt: new Date('2026-08-10T17:45').toISOString(),
  },
  {
    id: 'rec-3',
    vehicleId: 'default-vehicle',
    eventType: 'REFILL',
    eventDateTime: '2026-08-10T18:00',
    fuelLitres: 48.5,
    fuelPricePerLitre: 1.68,
    totalFuelCost: 81.48,
    odometerKm: 45582,
    odometerPhotoUrl: '',
    notes: 'Refilled after empty indicator',
    createdAt: new Date('2026-08-10T18:00').toISOString(),
  }
];

function getLocalRecords() {
  const data = localStorage.getItem(LOCAL_STORAGE_RECORDS_KEY);
  if (!data) {
    localStorage.setItem(LOCAL_STORAGE_RECORDS_KEY, JSON.stringify(defaultSeedRecords));
    return defaultSeedRecords;
  }
  return JSON.parse(data);
}

function saveLocalRecords(records) {
  localStorage.setItem(LOCAL_STORAGE_RECORDS_KEY, JSON.stringify(records));
}

export async function fetchFuelRecords() {
  if (isFirebaseConfigured && db) {
    try {
      const q = query(collection(db, 'fuelRecords'), orderBy('eventDateTime', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
      console.warn("Firestore fetch failed, falling back to local storage", e);
    }
  }
  return getLocalRecords().sort((a, b) => new Date(b.eventDateTime) - new Date(a.eventDateTime));
}

export async function createFuelRecord(recordData) {
  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'fuelRecords'), {
        ...recordData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      return { id: docRef.id, ...recordData };
    } catch (e) {
      console.warn("Firestore record creation failed, falling back to local storage", e);
    }
  }

  const records = getLocalRecords();
  const newRecord = {
    id: 'rec-' + Date.now(),
    ...recordData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  records.push(newRecord);
  saveLocalRecords(records);
  return newRecord;
}

export async function updateFuelRecord(id, recordData) {
  if (isFirebaseConfigured && db) {
    try {
      const ref = doc(db, 'fuelRecords', id);
      await updateDoc(ref, {
        ...recordData,
        updatedAt: new Date().toISOString(),
      });
      return { id, ...recordData };
    } catch (e) {
      console.warn("Firestore record update failed, falling back to local storage", e);
    }
  }

  const records = getLocalRecords();
  const index = records.findIndex(r => r.id === id);
  if (index !== -1) {
    records[index] = { ...records[index], ...recordData, updatedAt: new Date().toISOString() };
    saveLocalRecords(records);
  }
  return { id, ...recordData };
}

export async function deleteFuelRecord(id) {
  if (isFirebaseConfigured && db) {
    try {
      await deleteDoc(doc(db, 'fuelRecords', id));
      return true;
    } catch (e) {
      console.warn("Firestore record delete failed, falling back to local storage", e);
    }
  }

  const records = getLocalRecords().filter(r => r.id !== id);
  saveLocalRecords(records);
  return true;
}
