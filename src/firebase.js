//Setting firebase for our chat-app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFsbNI7hBo3oZHR2oZpsrB_2Gh0BFvZ10",
  authDomain: "chat-app-46f76.firebaseapp.com",
  projectId: "chat-app-46f76",
  storageBucket: "chat-app-46f76.appspot.com",
  messagingSenderId: "393297397408",
  appId: "1:393297397408:web:3b02e01c9e425aadf46bc5"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCrgVGVB43Dsv21n6oAC_P_hMStdQOlKbw",
//   authDomain: "enconnect-864d6.firebaseapp.com",
//   projectId: "enconnect-864d6",
//   storageBucket: "enconnect-864d6.appspot.com",
//   messagingSenderId: "1073111339720",
//   appId: "1:1073111339720:web:c8037ab6dc08367b9c4bfd",
//   measurementId: "G-N6T7YG70DX",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export {auth, db};