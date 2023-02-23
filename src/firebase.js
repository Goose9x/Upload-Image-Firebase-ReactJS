// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhKw_NHF2egfyXawHulHJFHFmlWNu_I5w",
  authDomain: "image-upload-react-firebase.firebaseapp.com",
  projectId: "image-upload-react-firebase",
  storageBucket: "image-upload-react-firebase.appspot.com",
  messagingSenderId: "355831948185",
  appId: "1:355831948185:web:21b5c215248db0a7bd6908",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
