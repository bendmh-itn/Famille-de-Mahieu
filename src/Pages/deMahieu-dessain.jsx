import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'
import firebase from "firebase";

const tabParents = [
    {
		"creationDate" : "21-12-20",
		"generation" : 1,
		"famillyName" : "de Mahieu - Dessain",
		"lastName" : "Dessain",
		"firstName" : "Marie-Antoinette",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG-20210131-WA0000.jpg?alt=media&token=4b458a1e-035b-4033-b946-b531ef9c238c",
		"birthDateText" : "27/05/1924",
		"deathDateText" : "-08/12/2020",
		"MyNumber" : 0
	},
	{
		"creationDate" : "21-12-20",
		"generation" : 1,
		"famillyName" : "de Mahieu - Dessain",
		"lastName" : "de Mahieu",
		"firstName" : "Louis",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20201221_092903.jpg?alt=media&token=cad40848-b928-4ef5-8dcb-269b0c12e1f4",
		"birthDateText" : "01/07/1926",
		"deathDateText" : "-01/07/2015",
		"MyNumber" : 0
    },
]

const tabEnfants1 = [
    {
		"creationDate" : "30-01-21",
		"generation" : 2,
		"famillyName" : "de Bernard de Fauconval - de Mahieu",
		"lastName" : "de Mahieu",
		"firstName" : "Marie-Joëlle",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20210130_141704.jpg?alt=media&token=42294e37-365a-4da0-aa9f-b30ae8868abf",
		"birthDateText" : "16/12/1954",
		"deathDateText" : "",
		"MyNumber" : 1
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 2,
		"famillyName" : " van Delft  de Mahieu ",
		"lastName" : "de Mahieu",
		"firstName" : "Sabine",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FSabine.jpg?alt=media&token=4d1156a2-1b2e-46a2-b547-fccd115b2b4d",
		"birthDateText" : "07/03/1956",
		"deathDateText" : "",
		"MyNumber" : 2
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 2,
		"famillyName" : "Rolin - de Mahieu",
		"lastName" : "de Mahieu",
		"firstName" : "Vinciane",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201227-135024.jpg?alt=media&token=d5535cab-ade5-4b3f-a380-e2ce7e7011fa",
		"birthDateText" : "19/03/1957",
		"deathDateText" : "",
		"MyNumber" : 3
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 2,
		"famillyName" : "de Mahieu - van Havre",
		"lastName" : "de Mahieu",
		"firstName" : "Cédric",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_0033.jpeg?alt=media&token=2e169a7c-6468-4ec2-a026-7ee30e8f40bb",
		"birthDateText" : "08/03/1958",
		"deathDateText" : "",
		"MyNumber" : 4
	},    
]

const tabEnfants2 = [
	{
        "creationDate": "02-02-21",
        "generation": 2,
        "famillyName": "de Mahieu - Godin",
        "lastName": "de Mahieu",
        "firstName": "Louis",
        "pictureName": "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20210131_215535.jpg?alt=media&token=0e5c113d-dc1b-420a-93a6-1ff753823463",
        "birthDateText": "27/07/1959",
        "deathDateText": "",
        "MyNumber": 5
    },
    {
		"creationDate" : "27-12-20",
		"generation" : 2,
		"famillyName" : "de Mahieu - Vandermeersch",
		"lastName" : "de Mahieu",
		"firstName" : "Miguel",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F03FF113D-BFB5-4AAA-BD93-1487B07879D6.jpeg?alt=media&token=20e44670-8291-459c-9a62-7507c7ce9f15",
		"birthDateText" : "15/07/1960",
		"deathDateText" : "",
		"MyNumber" : 6
	},
	{
		"creationDate" : "21-12-20",
		"generation" : 2,
		"famillyName" : "de Mahieu-de Vinck",
		"lastName" : "de Mahieu ",
		"firstName" : "Patrick",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20201221_154411.jpg?alt=media&token=f0f4c5f8-1c1b-4c63-bcfe-176718134250",
		"birthDateText" : "15/07/1960",
		"deathDateText" : "",
		"MyNumber" : 7
	},
	{
		"creationDate" : "30-01-21",
		"generation" : 2,
		"famillyName" : "Legast - de Mahieu",
		"lastName" : "de Mahieu",
		"firstName" : "Carine",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FDSC_2264.jpeg?alt=media&token=722b5e31-f6bc-4669-a6ff-688a0ef2860b",
		"birthDateText" : "29/11/1961",
		"deathDateText" : "",
		"MyNumber" : 8
	},
	{
		"creationDate" : "30-01-21",
		"generation" : 2,
		"famillyName" : "de Mahieu - Dessain",
		"lastName" : "de Mahieu",
		"firstName" : "Patricia",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG-20210131-WA0001.jpg?alt=media&token=fcb6a39d-d2d7-474e-b759-f98aa0b60fb3",
		"birthDateText" : "03/07/1965",
		"deathDateText" : "",
		"MyNumber" : 9
    },
]

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3JOdtAfXGRs5ob9KztShnK3OCY-m4oiU",
    authDomain: "demahieu-file.firebaseapp.com",
    projectId: "demahieu-file",
    storageBucket: "demahieu-file.appspot.com",
    messagingSenderId: "192092843689",
    appId: "1:192092843689:web:d490269a5a93671c3483b8"
  });


const Family = () => {
    useEffect(() => {
		/*const db = firebaseApp.firestore();
		db.collection("famille")
		.get()
		.then(querySnapshot => {
		const data = querySnapshot.docs.map(doc => doc.data());
		console.log(data); // array of familly objects
		});*/
        window.scroll(0, 0);
    }, []);
    return ( 
        <>
            <AllTable 
                tabParents={tabParents}
                tabEnfants1={tabEnfants1}
                tabEnfants2={tabEnfants2}
                numberParent="2"
            />
        </>
     );
}
 
export default Family;