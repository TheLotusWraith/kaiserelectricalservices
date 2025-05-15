import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSmaOHLFGfW7mxtaKLvvSAhCsXmXGLils",
  authDomain: "kaiser-electrical-services.firebaseapp.com",
  projectId: "kaiser-electrical-services",
  storageBucket: "kaiser-electrical-services.firebasestorage.app",
  messagingSenderId: "744798509005",
  appId: "1:744798509005:web:508ce5c23c78a330c05684",
  measurementId: "G-Y416FDBFX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
