import React from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"27-12-20", "generation":3, "famillyName":"van Delft", "lastName":"van DELFT", "firstName":"Matthieu", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_4133.JPG?alt=media&token=9aec796b-5783-4a17-a6a0-774f6a399f04", "birthDateText":"17/12/1984", "deathDateText":""},
    {"creationDate":"27-12-20", "generation":3, "famillyName":"van Delft", "lastName":"van DELFT", "firstName":"Manon", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_4158.JPG?alt=media&token=6e3465af-ffaf-46bf-b08f-f53cc1fe5a9f", "birthDateText":"03/10/1988", "deathDateText":""},

]

const tabEnfants1 = [
    {"creationDate":"27-12-20", "generation":4, "famillyName":"van Delft", "lastName":"van DELFT", "firstName":"Martin", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fmartin%20van%20delft.JPG?alt=media&token=2bfc9b90-0eb6-447c-bc5c-caeb29cc99bd", "birthDateText":"02/11/2019", "deathDateText":""},
    
]

const Family = () => {
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