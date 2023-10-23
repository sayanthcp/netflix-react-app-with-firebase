// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkrOsjF-VIVhOrslJI4jKcvSvB9B3FoKA",
  authDomain: "netflix-app-a7cd2.firebaseapp.com",
  projectId: "netflix-app-a7cd2",
  storageBucket: "netflix-app-a7cd2.appspot.com",
  messagingSenderId: "602129350209",
  appId: "1:602129350209:web:baa160645526e914abd0c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
