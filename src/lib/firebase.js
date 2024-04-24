import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "tbs-chat-61efb.firebaseapp.com",
  projectId: "tbs-chat-61efb",
  storageBucket: "tbs-chat-61efb.appspot.com",
  messagingSenderId: "486334633392",
  appId: "1:486334633392:web:3ae383401e278c47b7f275"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()