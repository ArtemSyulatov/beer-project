import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { TransformedBeer } from '../types/Beer';
import { SearchHistory } from '../types/SearchHistory';

export async function readDataFromFirebase<T>(
  email: string,
  field: string,
): Promise<T[]> {
  const userRef = doc(db, 'users', email);
  const userSnapshot = await getDoc(userRef);

  if (userSnapshot.exists()) {
    const userData = userSnapshot.data();

    if (userData && userData[field]) {
      const data: T[] = userData[field];
      return data.reverse();
    }
  }

  return [];
}

export async function addToFirebaseArray(
  email: string,
  field: string,
  newData: SearchHistory | TransformedBeer,
) {
  const userRef = doc(db, 'users', email);

  await updateDoc(userRef, {
    [field]: arrayUnion(newData),
  });
}

export async function removeFromFirebaseArray(
  email: string,
  field: string,
  dataToRemove: TransformedBeer | SearchHistory,
) {
  const userRef = doc(db, 'users', email);

  await updateDoc(userRef, {
    [field]: arrayRemove(dataToRemove),
  });
}
