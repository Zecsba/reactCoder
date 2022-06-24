import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwn9_2bRKgvQOzXl_ADVmFGkuJIilEm5I",
  authDomain: "tiendareact-fdb89.firebaseapp.com",
  projectId: "tiendareact-fdb89",
  storageBucket: "tiendareact-fdb89.appspot.com",
  messagingSenderId: "139740841474",
  appId: "1:139740841474:web:79d4c64c333bd7d9c3491b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;