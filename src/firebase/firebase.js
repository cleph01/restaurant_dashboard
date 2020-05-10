import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlkGEK-e-lJhvqorymL0iNOJJfsNbuPLA",
    authDomain: "socialiitedev.firebaseapp.com",
    databaseURL: "https://socialiitedev.firebaseio.com",
    projectId: "socialiitedev",
    storageBucket: "socialiitedev.appspot.com",
    messagingSenderId: "522802027283",
    appId: "1:522802027283:web:d45f445d59d7311af6d8e6",
    measurementId: "G-TTN6Q5HDQE",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

// firebase.analytics();

export { storage, firebase as default };
