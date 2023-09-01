import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD8sERm4vZsd5UllUTJgQMYSi_woNm2oLM",
  authDomain: "maltimart-b63c6.firebaseapp.com",
  projectId: "maltimart-b63c6",
  storageBucket: "maltimart-b63c6.appspot.com",
  messagingSenderId: "884376136826",
  appId: "1:884376136826:web:78158cbacb3dbf483bdfc3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;