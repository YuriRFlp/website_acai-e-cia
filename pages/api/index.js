// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as admin from 'firebase-admin';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://acai-cia-delivery-default-rtdb.firebaseio.com"
});


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVze8y50gpGnINwXH5SZVcLpNNBXB9onk",
  authDomain: "acai-cia-delivery.firebaseapp.com",
  databaseURL: "https://acai-cia-delivery-default-rtdb.firebaseio.com",
  projectId: "acai-cia-delivery",
  storageBucket: "acai-cia-delivery.appspot.com",
  messagingSenderId: "146450232092",
  appId: "1:146450232092:web:e4bba74a09a11ce81f00d9",
  measurementId: "G-1PL0P1K832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
