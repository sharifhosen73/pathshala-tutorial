// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyARYDA9qJAr0qJVhdNbp5Xk-5LPYJBVl2U",
//   authDomain: "pathshala-tutorial.firebaseapp.com",
//   projectId: "pathshala-tutorial",
//   storageBucket: "pathshala-tutorial.appspot.com",
//   messagingSenderId: "866149910732",
//   appId: "1:866149910732:web:8eda06bbd0c26bfa7f9a69",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
