// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmIYtlvLwOQXJNdQlr0lch1i9kQxY4zEc",
  authDomain: "facebook-clone09.firebaseapp.com",
  projectId: "facebook-clone09",
  storageBucket: "facebook-clone09.appspot.com",
  messagingSenderId: "563617486410",
  appId: "1:563617486410:web:914b5b1b766d086376b8b3",
  measurementId: "G-8RQZ5EQFZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app)

export default app;