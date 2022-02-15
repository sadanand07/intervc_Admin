// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCIebilszOMJx4Le9OsiXyFo3lfLQral8g",
	authDomain: "filemange-9a3e9.firebaseapp.com",
	projectId: "filemange-9a3e9",
	storageBucket: "filemange-9a3e9.appspot.com",
	messagingSenderId: "848729515833",
	appId: "1:848729515833:web:630683a42873bdae2f2ae8",
};

// Initialize Firebase
export const App = initializeApp(firebaseConfig);

export const storage = getStorage();
