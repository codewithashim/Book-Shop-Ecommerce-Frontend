// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5BEYZppFVc4AI0ejzCkp8y0kSYMi4kiY",
  authDomain: "book-shop-68c9f.firebaseapp.com",
  projectId: "book-shop-68c9f",
  storageBucket: "book-shop-68c9f.appspot.com",
  messagingSenderId: "1067940867584",
  appId: "1:1067940867584:web:00497b1ac06a6791c4f2e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;