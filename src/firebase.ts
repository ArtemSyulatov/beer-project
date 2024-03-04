import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBE5H8q3vGuTfVfrSpLb9Dbh7dQlOHuEKM',
  authDomain: 'beer-project-efd65.firebaseapp.com',
  projectId: 'beer-project-efd65',
  storageBucket: 'beer-project-efd65.appspot.com',
  messagingSenderId: '105924349416',
  appId: '1:105924349416:web:78cf123c4abb382614e85d',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
