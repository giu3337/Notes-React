import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyA7gVrpfIO4wAHV_yoBMQnttvHhdry2oFw",
    authDomain: "notes-react-21452.firebaseapp.com",
    projectId: "notes-react-21452",
    storageBucket: "notes-react-21452.appspot.com",
    messagingSenderId: "269165709671",
    appId: "1:269165709671:web:7ad43904333352eac0c7c2"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")