import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {
		"creationDate" : "23-12-20",
		"generation" : 3,
		"famillyName" : "Blave - de Fauconval ",
		"lastName" : "Blave",
		"firstName" : "Julien ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FB0E213CF-6C5A-4206-8B9B-7C031A36C168.png?alt=media&token=0e28aa13-2edc-4214-92b3-63ecb93d1f9c",
		"birthDateText" : "11/09/1982",
		"deathDateText" : "",
		"MyNumber" : 120
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
    }
]

const tabEnfants1 = [
    {
		"creationDate" : "23-12-20",
		"generation" : 4,
		"famillyName" : "Blave - de Fauconval ",
		"lastName" : "Blave",
		"firstName" : "Maxime ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FF8CD304A-CB4E-4FC6-900C-C9A09DB2BECC.jpeg?alt=media&token=9a970976-7044-4443-b415-8823679c662a",
		"birthDateText" : "09/11/2011",
		"deathDateText" : "",
		"MyNumber" : 121
	},
	{
		"creationDate" : "23-12-20",
		"generation" : 4,
		"famillyName" : "Blave - de Fauconval ",
		"lastName" : "Blave",
		"firstName" : "Élise ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FB11E43AB-2BBA-4325-A703-DE93AA04E652.jpeg?alt=media&token=c732cdf3-2e5f-4eb4-a2b2-2816a289f26f",
		"birthDateText" : "07/01/2020",
		"deathDateText" : "",
		"MyNumber" : 122
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
                numberParent="1"
            />
        </>
     );
}
 
export default Family;