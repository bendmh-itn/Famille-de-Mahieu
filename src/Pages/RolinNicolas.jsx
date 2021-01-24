import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {
		"creationDate" : "31-12-20",
		"generation" : 3,
		"famillyName" : "Rolin",
		"lastName" : "ROLIN",
		"firstName" : "Nicolas",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FNicolasROLIN.JPG?alt=media&token=d426b2b4-fad3-4e97-9711-76b3e517f8b2",
		"birthDateText" : "29/10/1982",
		"deathDateText" : ""
	}
]

const tabEnfants1 = [
    {
		"creationDate" : "31-12-20",
		"generation" : 4,
		"famillyName" : "Rolin",
		"lastName" : "Rolin",
		"firstName" : "Zacharie",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FZacharieROLIN.jpg?alt=media&token=93e55cf2-3ad9-4532-b477-5ecbddade2b8",
		"birthDateText" : "22/02/2012",
		"deathDateText" : ""
    },
    {
		"creationDate" : "31-12-20",
		"generation" : 4,
		"famillyName" : "Rolin",
		"lastName" : "Rolin",
		"firstName" : "Jimmy",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FJimmyROLIN.jpg?alt=media&token=b8f7f5ab-9df9-4805-8e14-97b4985dc160",
		"birthDateText" : "12/12/2014",
		"deathDateText" : ""
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