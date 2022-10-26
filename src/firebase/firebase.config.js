// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFUKygkQyPxfz7VwXkXmFzXFxvLnvtm1E",
    authDomain: "hero-learning-45b88.firebaseapp.com",
    projectId: "hero-learning-45b88",
    storageBucket: "hero-learning-45b88.appspot.com",
    messagingSenderId: "824163431638",
    appId: "1:824163431638:web:09eb69b87d649719e9c577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;