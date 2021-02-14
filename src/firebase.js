import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

  const provider = new firebase.auth.GoogleAuthProvider();
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3JOdtAfXGRs5ob9KztShnK3OCY-m4oiU",
    authDomain: "demahieu-file.firebaseapp.com",
    projectId: "demahieu-file",
    storageBucket: "demahieu-file.appspot.com",
    messagingSenderId: "192092843689",
    appId: "1:192092843689:web:d490269a5a93671c3483b8"
  });

export const db = firebaseApp.firestore();

function findAll(){
  return db.collection("famille")
		.orderBy("numberFamilly", "asc")
		.get()
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};
export default{
  findAll
};