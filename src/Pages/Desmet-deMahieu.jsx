import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"24-12-20", "generation":3, "famillyName":"Desmet - de Mahieu", "lastName":"Desmet", "firstName":"Xavier", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F5DA8CA5E-C588-4321-95F8-1CF414DEF61F.jpeg?alt=media&token=ba33abf1-6d6e-4e51-b5ea-67721b63205b", "birthDateText":"16/07/1990", "deathDateText":""},
    {"creationDate":"24-12-20", "generation":3, "famillyName":"Desmet - de Mahieu", "lastName":"Desmet", "firstName":"Caroline", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F9C200F9F-6147-40C9-BFE9-9F4923BF8AA9.jpeg?alt=media&token=a204738e-7bf3-45df-a293-82465202f108", "birthDateText":"26/11/1990", "deathDateText":""},
 ]

const tabEnfants1 = [
    {"creationDate":"24-12-20", "generation":4, "famillyName":"Desmet - de Mahieu", "lastName":"Desmet", "firstName":"Rosalie", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FA5BDB69B-FF8F-478E-9EFD-192EFDCAB7D8.jpeg?alt=media&token=2f1573d9-6563-4e7a-8ad3-4877ca73fa00", "birthDateText":"07/05/2020", "deathDateText":""},
    
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