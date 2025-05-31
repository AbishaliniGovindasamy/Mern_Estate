// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-73687.firebaseapp.com",
  projectId: "mern-estate-73687",
  storageBucket: "mern-estate-73687.firebasestorage.app",
  messagingSenderId: "391153971379",
  appId: "1:391153971379:web:fc53aeb2f2b3008e8280c6"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);