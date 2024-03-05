// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZoQwFK1PBTsucSZQI6e7wPuPkhcbeFf8",
  authDomain: "login-89b46.firebaseapp.com",
  projectId: "login-89b46",
  storageBucket: "login-89b46.appspot.com",
  messagingSenderId: "944443904453",
  appId: "1:944443904453:web:44901f51ac171254597bac",
  measurementId: "G-7KVX1MZZZN"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default appFirebase
