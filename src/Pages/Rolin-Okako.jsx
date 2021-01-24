import React from 'react';
import Table from '../Components/tableau'

const tabParents = [
    {
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
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "Rolin - Okako",
		"lastName" : "Okako Ehadi",
		"firstName" : "Atticha",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201227-220110_WhatsApp.jpg?alt=media&token=37d2bb50-90cc-40da-b5f3-dedef0d2eae4",
		"birthDateText" : "24/11/1992",
		"deathDateText" : ""
    }
]

const Family = () => {
    return ( 
        <>
            <Table 
                tabParents={tabParents}
            />
        </>
     );
}
 
export default Family;