import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMtc50ZF7R_R4VoTiY0w2m1bDWW95pFHk",
    authDomain: "contact-book-d6ae2.firebaseapp.com",
    projectId: "contact-book-d6ae2",
    storageBucket: "contact-book-d6ae2.appspot.com",
    messagingSenderId: "26413821056",
    appId: "1:26413821056:web:ee2c1cecfe4eb4b259ca65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// establish connection to firestore
const db = getFirestore(app)

export default db