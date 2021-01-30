import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
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
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "de Fauconval-Leblicq ",
		"lastName" : "Leblicq ",
		"firstName" : "Aurore ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FDD2002A0-4481-4984-9BDF-5521142CD5C7.jpeg?alt=media&token=49dc9d9e-cc20-4705-ba42-1431db13e3de",
		"birthDateText" : "06/06/1984",
		"deathDateText" : "",
		"MyNumber" : 110
    }   
]

const tabEnfants1 = [
    {
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "de Fauconval-Leblicq ",
		"lastName" : "de Fauconval ",
		"firstName" : "Gaspard ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F91AFD7CE-6C98-4115-B1E7-833B0A9384AE.jpeg?alt=media&token=c6220178-0bfe-4ac3-8de8-37658768e30e",
		"birthDateText" : "02/08/2014",
		"deathDateText" : "",
		"MyNumber" : 111
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "de Fauconval-Leblicq ",
		"lastName" : "de Fauconval",
		"firstName" : "Achille ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201227_172043.jpg?alt=media&token=e488856f-0216-4844-b435-043e6dd9bd07",
		"birthDateText" : "09/03/2016",
		"deathDateText" : "",
		"MyNumber" : 112
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "de Fauconval-Leblicq ",
		"lastName" : "de Fauconval ",
		"firstName" : "Rose ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F1B8C7F20-49AB-4173-89F3-F8545D3A241F.jpeg?alt=media&token=b8aa0184-a30c-4f32-82a0-186baeaf70c5",
		"birthDateText" : "18/05/2018",
		"deathDateText" : "",
		"MyNumber" : 113
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