import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARDVgClXWPq2VW7hTfeLobavj-s4U4k8g",
  authDomain: "videoconfrencesarwat.firebaseapp.com",
  projectId: "videoconfrencesarwat",
  storageBucket: "videoconfrencesarwat.appspot.com",
  messagingSenderId: "844240711032",
  appId: "1:844240711032:web:cfb94be42c33900c33ac8d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
