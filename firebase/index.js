// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkiK4lDe-r5w3DEYsS62_pguTjmjhWGLs",
  authDomain: "meow-6f161.firebaseapp.com",
  projectId: "meow-6f161",
  storageBucket: "meow-6f161.appspot.com",
  messagingSenderId: "341331511443",
  appId: "1:341331511443:web:db953ca418999e3688a566",
  measurementId: "G-ZFV0804EEH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();
