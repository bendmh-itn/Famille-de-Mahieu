import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"27-12-20", "generation":2, "famillyName":" van Delft  de Mahieu ", "lastName":"de Mahieu", "firstName":"Sabine", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FSabine.jpg?alt=media&token=4d1156a2-1b2e-46a2-b547-fccd115b2b4d", "birthDateText":"07/03/1956", "deathDateText":""},
    {"creationDate":"27-12-20", "generation":2, "famillyName":" van Delft  de Mahieu ", "lastName":"van DELFT", "firstName":"Baudouin", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fc021616d-9fd3-486c-8f73-72fd11cef5ff.JPG?alt=media&token=b2ec24ed-ec0a-4738-b6e1-5c83b51e4e1b", "birthDateText":"12/03/1956", "deathDateText":""},
 ]

const tabEnfants1 = [
    {"link" : "van Delft", "creationDate":"27-12-20", "generation":3, "famillyName":"van Delft", "lastName":"van DELFT", "firstName":"Matthieu", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_4133.JPG?alt=media&token=9aec796b-5783-4a17-a6a0-774f6a399f04", "birthDateText":"17/12/1984", "deathDateText":""},
    {"link" : "BOUDOUL - van DELFT", "creationDate":"27-12-20", "generation":3, "famillyName":"BOUDOUL - van DELFT", "lastName":"van Delft Boudoul", "firstName":"Magali", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F7D93E3CA-C535-4494-8666-7BE5B1FF5EA6.jpeg?alt=media&token=3d4a485c-2523-427e-b8b8-479a2c67df86", "birthDateText":"25/05/1987", "deathDateText":""},
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