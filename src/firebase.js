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
  if (person.dateMariage === undefined) {
    person.dateMariage = "";
  }
  return db
    .collection("famille")
    .doc(id)
    .set({
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

export function AddElementInPhoto(id, pictureName) {
  return db
    .collection("evenement")
    .doc(id)
    .update({
      Photos: firebase.firestore.FieldValue.arrayUnion(pictureName),
    });
}

export function getEvents() {
  return db.collection("evenement").orderBy("Date", "desc").get();
}

function ChangeMessageSended() {
  return db.collection("anniversaireCheck").doc("X9lvApViIrEGEYRZt2vB").set({
    send: true,
  });
}

function MessageSended() {
  return db.collection("anniversaireCheck").doc("X9lvApViIrEGEYRZt2vB").get();
}

export function CreateEvent(data, pictureName) {
  return db.collection("evenement").add({
    Titre: data.titre,
    Photos: [],
    PhotoEvent: pictureName,
    Date: firebase.firestore.Timestamp.fromDate(new Date(data.date)),
    Created_By: localStorage.getItem("userId"),
  });
}

export const storage = firebase.storage();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const signInWithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      const email = result.user.email;
      PutDataLocalStorage(email);
      localStorage.setItem("email", email);
    })
    .then(() => {
      window.location.reload();
    });
};

const PutDataLocalStorage = (email) => {
  db.collection("famille")
    .where("email", "==", email)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        localStorage.setItem("userId", doc.id);
        localStorage.setItem("userLastName", doc.data().lastName);
        localStorage.setItem("userFirstName", doc.data().firstName);
        localStorage.setItem("userPictureName", doc.data().pictureName);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

export function DeleteEvent(eventId) {
  db.collection("evenement")
    .doc(eventId)
    .delete()
    .then(() => {
      window.location.reload(false);
    })
    .catch((error) => {
      console.log(error);
    });
}

const Disconnect = () => {
  auth
    .signOut()
    .then(() => {
      localStorage.setItem("email", "");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};
const test = {
  findAll,
  signInWithGoogle,
  FindIdPerson,
  ModifyUserFireBase,
  FindEmailPerson,
  Disconnect,
  MessageSended,
  ChangeMessageSended,
};

export default test;
