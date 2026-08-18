import { storage, isFirebaseConfigured } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

export async function uploadOdometerPhoto(file, recordId) {
  if (!file) return null;

  if (isFirebaseConfigured && storage) {
    try {
      const storageRef = ref(storage, `vehicles/default-vehicle/fuel-records/${recordId}/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      return url;
    } catch (e) {
      console.warn("Storage upload failed, using Data URL fallback", e);
    }
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

export async function deleteOdometerPhoto(photoUrl) {
  if (!photoUrl) return true;
  if (isFirebaseConfigured && storage && photoUrl.startsWith('gs://')) {
    try {
      const storageRef = ref(storage, photoUrl);
      await deleteObject(storageRef);
    } catch (e) {
      console.warn("Storage delete failed", e);
    }
  }
  return true;
}
