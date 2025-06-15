// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqi-FO0sGAWEroyCyEoQBOMwyzC-y00GM",
  authDomain: "getjobnow-36c28.firebaseapp.com",
  projectId: "getjobnow-36c28",
  storageBucket: "getjobnow-36c28.firebasestorage.app",
  messagingSenderId: "935324997665",
  appId: "1:935324997665:web:1b1e020e60910b8445ab60",
  measurementId: "G-LPJ71T14Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);