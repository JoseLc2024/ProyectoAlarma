import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyABFmmXCpAG1o3T6sUv6XrIrbxGnXSsOTY",
    authDomain: "basedatos-8b574.firebaseapp.com",
    projectId: "basedatos-8b574",
    storageBucket: "basedatos-8b574.firebasestorage.app",
    messagingSenderId: "779533999956",
    appId: "1:779533999956:web:45f96fb133788d88e2b2c1",
    measurementId: "G-63977NSY2J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
