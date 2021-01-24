import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"21-12-20", "generation":3, "famillyName":"de Mahieu - henry de frahan", "lastName":"De Mahieu", "firstName":"Francois", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FFB_IMG_1608557548047.jpg?alt=media&token=a27eae8c-e2df-4d0e-8ae9-f002ca6e41c5", "birthDateText":"20/03/1994", "deathDateText":""},
    {"creationDate":"21-12-20", "generation":3, "famillyName":"de Mahieu - henry de frahan", "lastName":"Henry de Frahan", "firstName":"Gaëtane", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG-20190918-WA0022.jpg?alt=media&token=4cf3fab2-0080-4fb2-9c5f-1997dcd0962f", "birthDateText":"20/04/1994", "deathDateText":""},

]

const tabEnfants1 = [
    {"creationDate":"21-12-20", "generation":4, "famillyName":"de Mahieu - henry de frahan", "lastName":"de Mahieu", "firstName":"Arthur", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201211_194145.jpg?alt=media&token=096c27a2-997f-4e00-89c3-1e178d695b8b", "birthDateText":"17/12/2019", "deathDateText":""},
     
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