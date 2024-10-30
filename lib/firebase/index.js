// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJtDUvvdroS9hBLLpn8SZ75HVN5jaGnMs",
  authDomain: "finance-tracker-6e447.firebaseapp.com",
  projectId: "finance-tracker-6e447",
  storageBucket: "finance-tracker-6e447.appspot.com",
  messagingSenderId: "965910902006",
  appId: "1:965910902006:web:ca5434772ae0c1258ce8d7",
  measurementId: "G-04PM48RVBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
