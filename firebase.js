// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD15tV2ey3GevLsrf-Vj22bbVUOsm-NKrQ",
  authDomain: "react-native-todo-app-min.firebaseapp.com",
  projectId: "react-native-todo-app-min",
  storageBucket: "react-native-todo-app-min.appspot.com",
  messagingSenderId: "505138244525",
  appId: "1:505138244525:web:bb0774220cbb5018dd0f24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
