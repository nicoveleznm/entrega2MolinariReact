import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "entrega-final-molinari.firebaseapp.com",
  projectId: "entrega-final-molinari",
  storageBucket: "entrega-final-molinari.firebasestorage.app",
  messagingSenderId: "725569403239",
  appId: "1:725569403239:web:5a0b71c9a4ff7da12057c2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)