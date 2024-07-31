// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSzwczpjBWVAwx18gycfZMKd5GLDJWd_k",
  authDomain: "mindbridgeproj.firebaseapp.com",
  databaseURL: "https://mindbridgeproj-default-rtdb.firebaseio.com",
  projectId: "mindbridgeproj",
  storageBucket: "mindbridgeproj.appspot.com",
  messagingSenderId: "681649024158",
  appId: "1:681649024158:web:0ed00d5817550a551e9f8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();



