import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"25-12-20", "generation":3, "famillyName":"de Troyer", "lastName":"de Troyer", "firstName":"John", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201225-181158_Photos.jpg?alt=media&token=20a5fc21-bbd8-47f7-b400-bb5a2222772e", "birthDateText":"17/04/1988", "deathDateText":""},
    {"creationDate":"25-12-20", "generation":3, "famillyName":"de Troyer", "lastName":"de Mahieu", "firstName":"Charlotte", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201225-181850_Photos.jpg?alt=media&token=fa6104d8-9b1c-47d8-867e-851336d2bbcb", "birthDateText":"30/06/1989", "deathDateText":""},
 ]

const tabEnfants1 = [
    {"creationDate":"25-12-20", "generation":4, "famillyName":"de Troyer", "lastName":"de Troyer", "firstName":"Philippine", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201225-181548_Photos.jpg?alt=media&token=20fec856-ae44-490c-bfde-bdfcb50dadd2", "birthDateText":"31/08/2015", "deathDateText":""},
    {"creationDate":"25-12-20", "generation":4, "famillyName":"de Troyer", "lastName":"de Troyer", "firstName":"Isaure", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201225-181320_Photos.jpg?alt=media&token=5423a30f-836b-4b06-8e64-c8812a0efa98", "birthDateText":"17/01/2018", "deathDateText":""}, 
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