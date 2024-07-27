// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvLhWtAN_7xXHUkzldDiYAiCEVV1_btLs",
  authDomain: "techeat-d9de5.firebaseapp.com",
  projectId: "techeat-d9de5",
  storageBucket: "techeat-d9de5.appspot.com",
  messagingSenderId: "872835604345",
  appId: "1:872835604345:web:06736bd5f2a00ef5eb59a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app