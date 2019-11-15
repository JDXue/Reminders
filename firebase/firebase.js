import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDgkJH7WhLOWqfTGMx7bdt-0TJreW2Vs5o",
    authDomain: "remind-me-47fa5.firebaseapp.com",
    databaseURL: "https://remind-me-47fa5.firebaseio.com",
    projectId: "remind-me-47fa5",
    storageBucket: "remind-me-47fa5.appspot.com",
    messagingSenderId: "106722427522",
    appId: "1:106722427522:web:c4e9d0b61267285b1b6a9b",
    measurementId: "G-KF28784ZLM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;