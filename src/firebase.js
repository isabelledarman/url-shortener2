import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDD4Tv83KljFRNwkEz9rBWNnLuJsnhkO40",
    authDomain: "url-shortener-9cb4a.firebaseapp.com",
    projectId: "url-shortener-9cb4a",
    storageBucket: "url-shortener-9cb4a.appspot.com",
    messagingSenderId: "655656782847",
    appId: "1:655656782847:web:f88a36a2e9b85248b975ca",
    measurementId: "G-JHM4J4BB5L"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const db = app.firestore();
