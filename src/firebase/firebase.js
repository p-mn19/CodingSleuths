// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA52Sxs221VjMNvsyB2PrmzyeyHbI33gww",
  authDomain: "order-rush-9d384.firebaseapp.com",
  projectId: "order-rush-9d384",
  storageBucket: "order-rush-9d384.firebasestorage.app",
  messagingSenderId: "200123410661",
  appId: "1:200123410661:web:dc89e890d5b0e3198d4c0c",
  measurementId: "G-NSJSK9F18H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};