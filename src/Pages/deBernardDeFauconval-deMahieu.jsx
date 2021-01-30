import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"21-12-20", "generation":2, "famillyName":"de Bernard de Fauconval - de Mahieu", "lastName":"de Bernard de Fauconval", "firstName":"Didier", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20210130_141002.jpg?alt=media&token=eda5e271-ccd8-4ebb-a5c7-3ff818d072a0", "birthDateText":"02/03/1953", "deathDateText":""},
    {"creationDate":"21-12-20", "generation":2, "famillyName":"de Bernard de Fauconval - de Mahieu", "lastName":"de Mahieu", "firstName":"Marie-Joëlle", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20210130_141704.jpg?alt=media&token=42294e37-365a-4da0-aa9f-b30ae8868abf", "birthDateText":"16/12/1954", "deathDateText":""},
]

const tabEnfants1 = [
    {
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "de Fauconval-Leblicq ",
		"lastName" : "de Fauconval",
		"firstName" : "Gauthier",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201227_172323.jpg?alt=media&token=7df82f87-b6de-4a9f-a969-aeb157072905",
		"birthDateText" : "15/07/1983",
		"deathDateText" : "",
		"MyNumber" : 11
    },
	{
		"creationDate" : "23-12-20",
		"generation" : 3,
		"famillyName" : "Blave - de Fauconval ",
		"lastName" : "de Fauconval",
		"firstName" : "Géraldine ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FEDE5BD62-550F-4DBB-8B98-572F4B6B2980.jpeg?alt=media&token=a3d109cd-34a0-418d-8bb0-c5abaabe227a",
		"birthDateText" : "15/07/1985",
		"deathDateText" : "",
		"MyNumber" : 12
    },
	{
        "link" : "deFauconval-Leonardo",
		"creationDate" : "23-12-20",
		"generation" : 3,
		"famillyName" : "de Fauconval - Leonardo",
		"lastName" : "de Fauconval",
		"firstName" : "Stéphanie",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FSteph.jpg?alt=media&token=f359c09d-b29c-4c92-8a34-649870cce1bc",
		"birthDateText" : "09/05/1987",
		"deathDateText" : "",
		"MyNumber" : 13
    }
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
                numberParent="2"
            />
        </>
     );
}
 
export default Family;