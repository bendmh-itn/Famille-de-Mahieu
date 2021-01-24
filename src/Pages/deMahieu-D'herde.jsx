import React from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"20-12-20", "generation":3, "famillyName":"de Mahieu - D'herde", "lastName":"de Mahieu", "firstName":"Benoit", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FBenoit%20de%20Mahieu.jpg?alt=media&token=41ae6741-2b05-4168-bfe7-162d053215f2", "birthDateText":"15/10/1991", "deathDateText":""},
    {"creationDate":"20-12-20", "generation":3, "famillyName":"de Mahieu - D'herde", "lastName":"D'herde", "firstName":"Adeline", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FAdeline%20D'herde.jpg?alt=media&token=76acf063-c94d-4e4d-bd99-da265e9c00ce", "birthDateText":"30/10/1994", "deathDateText":""},
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