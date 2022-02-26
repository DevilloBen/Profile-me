// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtIFqAjhJaT1jBhf7Ofg6lf7ZGSRGuHpQ",
  authDomain: "profile-me-dab9a.firebaseapp.com",
  projectId: "profile-me-dab9a",
  storageBucket: "profile-me-dab9a.appspot.com",
  messagingSenderId: "420603135304",
  appId: "1:420603135304:web:b479850c5e1e7599455f7d",
  measurementId: "G-RKXLG8H51C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);