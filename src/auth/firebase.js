// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAijB3P4b6wsXWVeEmBiPEeicgCPmtQoQ8",
  authDomain: "react-firebase-v9-63b89.firebaseapp.com",
  projectId: "react-firebase-v9-63b89",
  storageBucket: "react-firebase-v9-63b89.appspot.com",
  messagingSenderId: "255308780652",
  appId: "1:255308780652:web:25c7a98de1f8d4d46e3449",
  measurementId: "G-8GZCL30MLZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
