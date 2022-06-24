// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {initializeFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROYECTID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGE,
  appId: import.meta.env.VITE_APP_FIREBASE_APPID
};

// Initialize Firebase

// const app = initializeApp(FirebaseConfig);

// const db = getFirestore(app);

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export default {auth, db};