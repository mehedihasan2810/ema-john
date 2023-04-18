// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzDj1CJk9LMuTfwkVM4HIdfWxbEyk9GRI",
  authDomain: "ema-john-with-firebase-a-51fa0.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-51fa0",
  storageBucket: "ema-john-with-firebase-a-51fa0.appspot.com",
  messagingSenderId: "180803971516",
  appId: "1:180803971516:web:6a8395c336ffbe35d9e3b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
