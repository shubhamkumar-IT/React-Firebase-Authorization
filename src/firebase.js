import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBRTXyEzkVzBEnl59LbVW_xlYLhuKuPrc8",
  authDomain: "auth-development-1ba93.firebaseapp.com",
  databaseURL: "https://auth-development-1ba93-default-rtdb.firebaseio.com/",
  projectId: "auth-development-1ba93",
  storageBucket: "auth-development-1ba93.appspot.com",
  messagingSenderId: "651291966724",
  appId: "1:651291966724:web:ad75933c8dbf334916e451",
});

export const auth = app.auth();
export default app;
