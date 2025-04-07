// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9H1c2pYPeo9BzVTIJDSXaWYdMgXuz0Kk",
  authDomain: "myportfolio-34c62.firebaseapp.com",
  databaseURL: "https://myportfolio-34c62-default-rtdb.firebaseio.com",
  projectId: "myportfolio-34c62",
  storageBucket: "myportfolio-34c62.firebasestorage.app",
  messagingSenderId: "914813419039",
  appId: "1:914813419039:web:414d0cb806278bd6085f2a",
  measurementId: "G-GT0CWT1PLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Solusi: hanya jalankan getAnalytics jika ada window (client-side)
if (typeof window !== 'undefined') {
  // const analytics = getAnalytics(app); // ✅ Opsional, boleh diaktifkan jika kamu butuh
}
export { database };