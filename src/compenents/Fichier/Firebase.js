// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqAERmg-3GLcFYhyxmSmvrJQSsoW7DnxM",
  authDomain: "techserve-app.firebaseapp.com",
  projectId: "techserve-app",
  storageBucket: "techserve-app.appspot.com",
  messagingSenderId: "1067998649351",
  appId: "1:1067998649351:web:536af3a39c5aa0fc4cdea2",
  measurementId: "G-JRG4WLNT8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);