import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqiMss3QStP7sSSoBOqB94bYYQ3LG5EV0",
  authDomain: "dropit-c6cb8.firebaseapp.com",
  projectId: "dropit-c6cb8",
  storageBucket: "dropit-c6cb8.appspot.com",
  messagingSenderId: "91261480364",
  appId: "1:91261480364:web:5638651c1fad19b7a9de09"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;