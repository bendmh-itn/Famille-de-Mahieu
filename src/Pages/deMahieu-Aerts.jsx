import React from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"30-12-20", "generation":3, "famillyName":"de Mahieu - Aerts", "lastName":"de Mahieu", "firstName":"Anne-Sophie", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Freceived_128401348591378.jpeg?alt=media&token=4a41e527-8490-4345-b5d3-7330ac6841c5", "birthDateText":"08/01/1990", "deathDateText":""},
    {"creationDate":"30-12-20", "generation":3, "famillyName":"de Mahieu - Aerts", "lastName":"Aerts", "firstName":"Jelle", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20170429_112224.jpg?alt=media&token=5e35742b-ee85-4d73-8e75-78633c20f0ed", "birthDateText":"01/06/1990", "deathDateText":""},
]

const Family = () => {
    return ( 
        <>
            <AllTable 
                tabParents={tabParents}
            />
        </>
     );
}
 
export default Family;