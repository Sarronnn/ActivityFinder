// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR4nvC0t3Yr19BZ8eklZRcwgeWZyn8pV4",
  authDomain: "activityfin-3a877.firebaseapp.com",
  projectId: "activityfin-3a877",
  storageBucket: "activityfin-3a877.appspot.com",
  messagingSenderId: "538901836664",
  appId: "1:538901836664:web:bc59ce7a002eeac381ce8d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
