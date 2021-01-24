import React from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {
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
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "Rolin - Haverhals",
		"lastName" : "Haverhals",
		"firstName" : "Veerle",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F83606188_10156579178281898_334906186644062208_o.jpg?alt=media&token=ff710bd1-eafd-4c6c-b756-645a2c934f34",
		"birthDateText" : "26/02/1983",
		"deathDateText" : ""
	},]

const tabEnfants1 = [
    {
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "Rolin - Haverhals",
		"lastName" : "Rolin",
		"firstName" : "Coline",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201107_160939.jpg?alt=media&token=eae47c28-4316-406f-8487-0bbba2ad218d",
		"birthDateText" : "01/05/2012",
		"deathDateText" : ""
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "Rolin - Haverhals",
		"lastName" : "Rolin",
		"firstName" : "Eliott",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201107_162746.jpg?alt=media&token=2410e8b3-c2ce-428b-ac6b-8368d5c2082b",
		"birthDateText" : "12/05/2013",
		"deathDateText" : ""
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "Rolin - Haverhals",
		"lastName" : "Rolin",
		"firstName" : "Vasco",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201107_163348.jpg?alt=media&token=19590ce3-6e87-4009-a509-7cfcbaee477d",
		"birthDateText" : "09/01/2015",
		"deathDateText" : ""
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "Rolin - Haverhals",
		"lastName" : "Rolin",
		"firstName" : "Merlin",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201107_160710.jpg?alt=media&token=968b2877-7993-431e-ac69-41563fce437c",
		"birthDateText" : "17/02/2016",
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