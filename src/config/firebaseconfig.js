// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBptSgC56rdo0KKcDxeAE6UVyVx07LMAKA",
  authDomain: "reactfirebase-60e95.firebaseapp.com",
  projectId: "reactfirebase-60e95",
  storageBucket: "reactfirebase-60e95.appspot.com",
  messagingSenderId: "50023104902",
  appId: "1:50023104902:web:4df60f116dbe2357bdec07",
  measurementId: "G-EFVE2J5GSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app