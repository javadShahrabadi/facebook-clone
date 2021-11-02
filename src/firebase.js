import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkU3r-hJCdgIp4fStbxE0sjXXT9ibIVKQ",
  authDomain: " ",
  projectId: "facebook-2-7f9c4",
  storageBucket: "facebook-2-7f9c4.appspot.com",
  messagingSenderId: "613294074141",
  appId: "1:613294074141:web:bc96259d475044d0ddd9f4",
  measurementId: "G-7FXKH8WTLZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
