// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9pGdRj0WGkV6uabLYHiHaKLrNoRTl6CM",
  authDomain: "activity-finder-db.firebaseapp.com",
  projectId: "activity-finder-db",
  storageBucket: "activity-finder-db.appspot.com",
  messagingSenderId: "415498101532",
  appId: "1:415498101532:web:974c9f86695f320b0190d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
