// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZSVLWZCYlKNe_8eiHoIxMks7Ep4UuevY",
    authDomain: "projetuf-a0e7c.firebaseapp.com",
    projectId: "projetuf-a0e7c",
    storageBucket: "projetuf-a0e7c.appspot.com",
    messagingSenderId: "174279658009",
    appId: "1:174279658009:web:9e0f5028b00b0d99e43888",
    measurementId: "G-8L68RFVC1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const db = getFirestore(app);

export {authentication, db};