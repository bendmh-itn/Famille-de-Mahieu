import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {
		"creationDate" : "30-01-21",
		"generation" : 2,
		"famillyName" : "Legast - de Mahieu",
		"lastName" : "Legast",
		"firstName" : "Thierry",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FDSC_2456.jpeg?alt=media&token=386eee1a-93b4-40d8-ba37-39d710b725d8",
		"birthDateText" : "09/08/1960",
		"deathDateText" : "",
		"MyNumber" : 80
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
]

const tabEnfants1 = [
    {
		"creationDate" : "30-01-21",
		"generation" : 3,
		"famillyName" : "Legast- de Mahieu",
		"lastName" : "Legast",
		"firstName" : "Galien",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG-20200804-WA0010%20(2).jpg?alt=media&token=dd21169c-d3da-43ac-9c9d-d5387c812b0e",
		"birthDateText" : "12/03/1989",
		"deathDateText" : "",
		"MyNumber" : 81
	},
	{
		"creationDate" : "30-01-21",
		"generation" : 3,
		"famillyName" : "Legast - de Mahieu",
		"lastName" : "Legast",
		"firstName" : "Ophélie",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F58c7cb37-c6a3-4e5e-b2ab-6b1cdcfc642f.jpeg?alt=media&token=df568371-6404-45b8-87a6-cf5a0ab27438",
		"birthDateText" : "28/03/1991",
		"deathDateText" : "",
		"MyNumber" : 82
	},
]

const Family = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return ( 
        <>
            <AllTable 
                tabParents={tabParents}
                tabEnfants1={tabEnfants1}
            />
        </>
     );
}
 
export default Family;