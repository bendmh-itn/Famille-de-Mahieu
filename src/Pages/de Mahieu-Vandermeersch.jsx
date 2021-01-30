import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"27-12-20", "generation":2, "famillyName":"de Mahieu - Vandermeersch", "lastName":"de Mahieu", "firstName":"Miguel", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F03FF113D-BFB5-4AAA-BD93-1487B07879D6.jpeg?alt=media&token=20e44670-8291-459c-9a62-7507c7ce9f15", "birthDateText":"15/07/1960", "deathDateText":""},
    {"creationDate":"23-12-20", "generation":2, "famillyName":"de Mahieu - Vandermeersch", "lastName":"de Mahieu - Vandermeersch ", "firstName":"Brigitte ", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FFCC71762-3409-4EEB-A852-8709B9DB8A5C.jpeg?alt=media&token=d535d8ef-8390-4630-806c-acb86102cd47", "birthDateText":"31/12/1965", "deathDateText":""},
 ]

const tabEnfants1 = [
    {"creationDate":"25-12-20", "generation":3, "famillyName":"de Troyer", "lastName":"de Mahieu", "firstName":"Charlotte", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201225-181850_Photos.jpg?alt=media&token=fa6104d8-9b1c-47d8-867e-851336d2bbcb", "birthDateText":"30/06/1989", "deathDateText":""},
    {"creationDate":"24-12-20", "generation":3, "famillyName":"Desmet - de Mahieu", "lastName":"Desmet", "firstName":"Caroline", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F9C200F9F-6147-40C9-BFE9-9F4923BF8AA9.jpeg?alt=media&token=a204738e-7bf3-45df-a293-82465202f108", "birthDateText":"26/11/1990", "deathDateText":""},
    {"creationDate":"21-12-20", "generation":3, "famillyName":"de Mahieu - Vandermeersch", "lastName":"De Mahieu", "firstName":"Isabelle", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG-20201221-WA0002.jpg?alt=media&token=61869891-3023-48f9-b33f-abdfd9e12e87", "birthDateText":"07/10/1993", "deathDateText":""},
    {"creationDate":"25-12-20", "generation":3, "famillyName":"del Marmol - de Mahieu", "lastName":"de Mahieu", "firstName":"Valentine", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fphoto%20Valentine%20Dm.png?alt=media&token=d18b1c70-6a95-4d5d-8dc9-3b138650a4df", "birthDateText":"27/04/1995", "deathDateText":""},
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