// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpf9vg2Sk-pw1Bg6mAinPEDOG2MV8ros8",
  authDomain: "pokedexdb-d9d0c.firebaseapp.com",
  databaseURL: "https://pokedexdb-d9d0c-default-rtdb.firebaseio.com",
  projectId: "pokedexdb-d9d0c",
  storageBucket: "pokedexdb-d9d0c.appspot.com",
  messagingSenderId: "986377585368",
  appId: "1:986377585368:web:b4d64c5f8f31b0e4a10dad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
