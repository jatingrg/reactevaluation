// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqso1DQ2H_VD_3rMu_By806BLXkfPjGBs",
  authDomain: "tasks-bd851.firebaseapp.com",
  databaseURL: "https://tasks-bd851-default-rtdb.firebaseio.com",
  projectId: "tasks-bd851",
  storageBucket: "tasks-bd851.firebasestorage.app",
  messagingSenderId: "919792920772",
  appId: "1:919792920772:web:4e84c42926a7c4d9498191",
  measurementId: "G-LGYD8HQJBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);