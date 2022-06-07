import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { copyUserData } from "./Functions/cache";

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

//Cette fonction permet de supprimer la photo du storage et de l'historique de la personne
export async function getRefPicture(url, id) {
  return await db
    .collection("famille")
    .doc(id)
    .update({
      PhotosHistory: firebase.firestore.FieldValue.arrayRemove(url),
    })
    .then(() => {
      firebase.storage().refFromURL(url).delete();
    });
}

export async function deletePicture(url) {
  return await firebase.storage().refFromURL(url).delete();
}

export async function modifyPhotosInEvent(id, pictureList) {
  return await db.collection("evenement").doc(id).update({
    Photos: pictureList,
  });
}

export async function copyDataInTest() {}

//Cette fonction permet de changer la photo de profil parmis celle dans le tableau de la personne.
export function changePictureProfil(id, pictureName) {
  return db.collection("famille").doc(id).update({
    pictureName: pictureName,
  });
}

export function CreateUserFromCSV(data) {
  return db.collection("famille").add({
    deathDate: data[9],
    firstName: data[7],
    lastName: data[4],
    generation: data[8],
    birthDate: data[5],
    numberFamilly: data[3],
    pictureName: data[2],
    PhotosHistory: firebase.firestore.FieldValue.arrayUnion(data[6]),
    famillyName: data[1],
    dateMariage: data[10],
    email: data[11],
    status: "à vérifié",
  });
}

function ModifyUserFireBase(id, person, pictureName = "") {
  if (person.dateMariage === undefined) {
    person.dateMariage = "";
  }
  return db
    .collection("famille")
    .doc(id)
    .update({
      firstName: person.firstName,
      lastName: person.lastName,
      generation: person.generation,
      birthDate: person.birthDate,
      numberFamilly: person.numberFamilly,
      pictureName: pictureName === "" ? person.pictureName : pictureName,
      PhotosHistory:
        pictureName === ""
          ? firebase.firestore.FieldValue.arrayUnion(person.pictureName)
          : firebase.firestore.FieldValue.arrayUnion(pictureName),
      famillyName: person.famillyName,
      dateMariage: person.dateMariage,
      email: person.email,
    });
}

export async function getEmailInOption() {
  let userData = [];
  return await db
    .collection("emails")
    .where("status", "==", "à vérifié")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        userData.push({
          value: doc.data().adresseMail + "email:" + doc.id,
          label: doc.data().adresseMail,
        });
      });
      return userData;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

export async function getUsersInOption() {
  let userData = [];
  return await db
    .collection("famille")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        userData.push({
          value: doc.id,
          label: doc.data().firstName + " " + doc.data().lastName,
        });
      });
      return userData;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

export function changeStatus(id) {
  return db.collection("emails").doc(id).update({
    status: "vérifié",
  });
}

export function addEmail(id, email) {
  return db.collection("famille").doc(id).update({
    email: email,
  });
}

export async function getStatusEmail(email) {
  let userData = [];
  return await db
    .collection("emails")
    .where("adresseMail", "==", email)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        userData.push(doc.data());
      });
      return userData;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

export function AddElementInPhoto(id, pictureName, userId, dataSended) {
  return db
    .collection("evenement")
    .doc(id)
    .update({
      Photos:
        dataSended === "images"
          ? firebase.firestore.FieldValue.arrayUnion({
              image: pictureName,
              Added_by: userId,
            })
          : dataSended === "video"
          ? firebase.firestore.FieldValue.arrayUnion({
              video: pictureName,
              Added_by: userId,
            })
          : firebase.firestore.FieldValue.arrayUnion({
              link: pictureName.link,
              texte: pictureName.title,
              Added_by: userId,
            }),
    });
}

export function getEvents() {
  return db.collection("evenement").orderBy("Date", "desc").get();
}

export function CreateEvent(data, pictureName, userId) {
  return db.collection("evenement").add({
    Titre: data.titre,
    Photos: [],
    PhotoEvent: pictureName,
    Date: firebase.firestore.Timestamp.fromDate(new Date(data.date)),
    Created_By: userId,
  });
}

export function UpdateEvent(data, id, pictureName) {
  return db
    .collection("evenement")
    .doc(id)
    .update({
      Titre: data.titre,
      PhotoEvent: pictureName,
      Date: firebase.firestore.Timestamp.fromDate(new Date(data.date)),
    });
}

export function CreateUserFireBase(person, pictureName = "") {
  return db.collection("test").add({
    firstName: person.firstName,
    lastName: person.lastName,
    generation: person.generation,
    birthDate: person.birthDate,
    numberFamilly: person.numberFamilly,
    pictureName: pictureName,
    PhotosHistory: firebase.firestore.FieldValue.arrayUnion(pictureName),
    famillyName: person.famillyName,
    dateMariage: person.dateMariage,
    email: "",
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
      localStorage.setItem("email", email);
    })
    .then(() => {
      window.location.reload();
    });
};

export const PutDataLocalStorage = async (email) => {
  let userData = {};
  return await db
    .collection("famille")
    .where("email", "==", email)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        userData.id = doc.id;
        userData.data = doc.data();
        copyUserData(doc.id, doc.data());
      });
      return userData;
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

export function AddEmailAddressWithCSV(data) {
  return db.collection("emails").add({
    adresseMail: data[0],
    status: "à vérifié",
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
};

export default test;
