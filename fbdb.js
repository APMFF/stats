// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa3o8bue_lX22U_7JrlFRX6X5p3pr8WDE",
  authDomain: "scorigami-eda54.firebaseapp.com",
  databaseURL: "https://scorigami-eda54-default-rtdb.firebaseio.com",
  projectId: "scorigami-eda54",
  storageBucket: "scorigami-eda54.appspot.com",
  messagingSenderId: "558718923221",
  appId: "1:558718923221:web:a969ea51a72e760e408d5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {
  getDatabase,
  ref,
  set,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
const db = getDatabase();

let scores = [{ frequency: 0, id: 1, lose: 50, win: 57 }];

function getAllData() {
  const dbRef = ref(db, "your_collection_name");

  return onValue(dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      scores.push(childSnapshot.val());
    });
  });
}

getAllData();
console.log(scores);
// function getAllData() {
//   const dbRef = ref(db);
//   get(child(dbRef, "your_collection_name")).then((snapshot) => {
//     let scoreData = [];
//     snapshot.forEach((childSnapshot) => {
//       scoreData.push(childSnapshot.val());
//     });
//     return scoreData;
//   });
// }

// let scores = getAllData();
// console.log(scores);
export default scores;
