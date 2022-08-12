import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  NEXT_PUBLIC_APIKEY,
  NEXT_PUBLIC_APP_ID,
  NEXT_PUBLIC_AUTH_DOMAIN,
  NEXT_PUBLIC_MEASUREMENT_ID,
  NEXT_PUBLIC_MESSAGIN_SENDER_ID,
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_STORAGE_BUCKET,
} from "./dotenv";

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_APIKEY,
  authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_MESSAGIN_SENDER_ID,
  appId: NEXT_PUBLIC_APP_ID,
  measurementId: NEXT_PUBLIC_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
