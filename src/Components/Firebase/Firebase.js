// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the authentication module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI2lcJK4vxnE5_sCMPyF5gg2zCC3PM-fY",
  authDomain: "picfiesta282001.firebaseapp.com",
  projectId: "picfiesta282001",
  storageBucket: "picfiesta282001.appspot.com",
  messagingSenderId: "189785598776",
  appId: "1:189785598776:web:0e205bc45445c8237e2fcd",
  measurementId: "G-Z0F72NHE5P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize the authentication module

export default auth; // Export the authentication module
