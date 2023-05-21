import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_APIKEY,
  authDomain: import.meta.env.VITE_FIRE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIRE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIRE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIRE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIRE_APPID,
};
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
