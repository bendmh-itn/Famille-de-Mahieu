import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {
		"creationDate" : "23-12-20",
		"generation" : 3,
		"famillyName" : "de Fauconval - Leonardo",
		"lastName" : "de Fauconval",
		"firstName" : "Stéphanie",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FSteph.jpg?alt=media&token=f359c09d-b29c-4c92-8a34-649870cce1bc",
		"birthDateText" : "09/05/1987",
		"deathDateText" : "",
		"MyNumber" : 13
    },
    {
		"creationDate" : "23-12-20",
		"generation" : 3,
		"famillyName" : "de Fauconval - Leonardo",
		"lastName" : "Leonardo",
		"firstName" : "Fabrizio",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FWhatsApp%20Image%202020-12-23%20at%2008.19.36.jpeg?alt=media&token=3d370d36-6700-46b5-aad6-5a2bf0522f23",
		"birthDateText" : "26/02/1988",
		"deathDateText" : "",
		"MyNumber" : 130
	},
]

const tabEnfants1 = [
    {
		"creationDate" : "23-12-20",
		"generation" : 4,
		"famillyName" : "de Fauconval - Leonardo",
		"lastName" : "Leonardo",
		"firstName" : "Joanna",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FWhatsApp%20Image%202020-12-23%20at%2008.14.58.jpeg?alt=media&token=18ffbd3d-01b1-4243-94ba-731e2d2a8265",
		"birthDateText" : "10/10/2014",
		"deathDateText" : "",
		"MyNumber" : 131
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
                numberEnfant="2"
            />
        </>
     );
}
 
export default Family;