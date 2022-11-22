import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD6eFUjivBlPK8Ffctgj5yR84Gu_tDAMOY",
    authDomain: "movie-app-9715f.firebaseapp.com",
    projectId: "movie-app-9715f",
    storageBucket: "movie-app-9715f.appspot.com",
    messagingSenderId: "785234616565",
    appId: "1:785234616565:web:33e9ddddde0ed4d87465bc"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);