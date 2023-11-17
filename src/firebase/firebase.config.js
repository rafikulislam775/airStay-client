// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }

// export const app = initializeApp(firebaseConfig)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8zQhF95GG7uxKpd_ii6usmCbgu5jIa-I",
  authDomain: "all-project-a946c.firebaseapp.com",
  projectId: "all-project-a946c",
  storageBucket: "all-project-a946c.appspot.com",
  messagingSenderId: "325591516255",
  appId: "1:325591516255:web:374031b278248f049487ea",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
