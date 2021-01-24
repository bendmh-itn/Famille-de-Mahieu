import React from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {
		"creationDate" : "10-01-21",
		"generation" : 3,
		"famillyName" : "Rolin - Depret",
		"lastName" : "Depret",
		"firstName" : "Charlotte ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20210110_172826.jpg?alt=media&token=6723f73b-87f2-490d-9f3e-f11278cfa05d",
		"birthDateText" : "21/09/1985",
		"deathDateText" : ""
    },
    {
		"creationDate" : "10-01-21",
		"generation" : 3,
		"famillyName" : "Rolin - Depret",
		"lastName" : "Rolin",
		"firstName" : "Sébastien ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20210110_172457.jpg?alt=media&token=be1849fd-9ccf-4776-b591-1e36b761819f",
		"birthDateText" : "21/03/1987",
		"deathDateText" : ""
	}
]

const tabEnfants1 = [
    {
		"creationDate" : "10-01-21",
		"generation" : 4,
		"famillyName" : "Rolin - Depret",
		"lastName" : "Rolin",
		"firstName" : "Noelia",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG-20210101-WA0002.jpg?alt=media&token=3c720004-715b-4d13-a8ff-3ccb5939c121",
		"birthDateText" : "19/12/2020",
		"deathDateText" : ""
	},   
]

const Family = () => {
    return ( 
        <>
            <AllTable 
                tabParents={tabParents}
                tabEnfants1={tabEnfants1}
                numberEnfant="2"
            />
        </>
     );
}
 
export default Family;