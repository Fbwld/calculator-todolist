// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref} from "firebase/storage"
import firebase from "firebase/compat/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClewoNFVE_Xi7pqhA7Uj4SjOs5LeepRWs",
  authDomain: "febiluplup-8dc94.firebaseapp.com",
  projectId: "febiluplup-8dc94",
  storageBucket: "febiluplup-8dc94.appspot.com",
  messagingSenderId: "569156522704",
  appId: "1:569156522704:web:950e6d1fce1d0ec776c4d5",
  measurementId: "G-G8ECEGM05H"
};

// Initialize Firebase
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};