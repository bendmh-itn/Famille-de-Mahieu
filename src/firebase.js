import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();
var firebaseApp;

if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3JOdtAfXGRs5ob9KztShnK3OCY-m4oiU",
    authDomain: "demahieu-file.firebaseapp.com",
    projectId: "demahieu-file",
    storageBucket: "demahieu-file.appspot.com",
    messagingSenderId: "192092843689",
    appId: "1:192092843689:web:d490269a5a93671c3483b8",
  });
} else {
  firebaseApp = firebase.app(); // if already initialized, use that one
}

export const db = firebaseApp.firestore();

function findAll() {
  return db.collection("famille").orderBy("numberFamilly", "asc").get();
}

function FindIdPerson(numberFamilly) {
  return db
    .collection("famille")
    .where("numberFamilly", "==", numberFamilly)
    .get();
}

function FindEmailPerson(email) {
  return db.collection("famille").where("email", "==", email).get();
}

function ModifyUserFireBase(id, person, pictureName = "") {
  return db.collection("famille").doc(id).set({
    firstName: person.firstName,
    lastName: person.lastName,
    generation: person.generation,
    birthDate: person.birthDate,
    numberFamilly: person.numberFamilly,
    pictureName: pictureName === "" ? person.pictureName : pictureName,
    famillyName: person.famillyName,
    dateMariage: person.dateMariage,
    email: person.email,
  });
}

export const storage = firebase.storage();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
const test = {
  findAll,
  signInWithGoogle,
  FindIdPerson,
  ModifyUserFireBase,
  FindEmailPerson,
};

export default test;
