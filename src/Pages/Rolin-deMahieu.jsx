import React from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"21-12-20", "generation":2, "famillyName":"Rolin - de Mahieu", "lastName":"ROLIN", "firstName":"Guy", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201221-151037.jpg?alt=media&token=a7f1603b-255e-4168-8754-e4afecf5ebca", "birthDateText":"07/11/1956", "deathDateText":""},
    {"creationDate":"27-12-20", "generation":2, "famillyName":"Rolin - de Mahieu", "lastName":"de Mahieu", "firstName":"Vinciane", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201227-135024.jpg?alt=media&token=d5535cab-ade5-4b3f-a380-e2ce7e7011fa", "birthDateText":"19/03/1957", "deathDateText":""},
]

const tabEnfants1 = [
    {
        "link" : "Rolin - Haverhals",
		"creationDate" : "21-12-20",
		"generation" : 3,
		"famillyName" : "Rolin - Haverhals",
		"lastName" : "Rolin",
		"firstName" : "Xavier",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201221_141709.jpg?alt=media&token=8e8a9c14-9f26-46d7-9085-33b791b980a6",
		"birthDateText" : "16/11/1980",
		"deathDateText" : ""
	},
    {
        "link" : "RolinNicolas",
		"creationDate" : "31-12-20",
		"generation" : 3,
		"famillyName" : "Rolin",
		"lastName" : "ROLIN",
		"firstName" : "Nicolas",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FNicolasROLIN.JPG?alt=media&token=d426b2b4-fad3-4e97-9711-76b3e517f8b2",
		"birthDateText" : "29/10/1982",
		"deathDateText" : ""
    },
    {
        "link" : "Rolin - Okako",
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "Rolin - Okako",
		"lastName" : "Rolin",
		"firstName" : "Christophe",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG-20201227-WA0006.jpg?alt=media&token=ab944e2a-5622-425b-9e30-c4c8e385e446",
		"birthDateText" : "18/07/1985",
		"deathDateText" : ""
    },
    {
        "link" : "Rolin - Depret",
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

const Family = () => {
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