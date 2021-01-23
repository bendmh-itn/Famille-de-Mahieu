import React from 'react';
import Table from '../Components/tableau'

const tabParents = [
    {"creationDate":"22-12-20", "generation":3, "famillyName":"de Mahieu - Doat", "lastName":"De Mahieu", "firstName":"Jean Baptiste ", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201209_212137.jpg?alt=media&token=bfbbcc0c-4657-4637-8123-deca5199b465", "birthDateText":"11/08/1986", "deathDateText":""},
]

const tabEnfants1 = [
    {"creationDate":"24-12-20", "generation":4, "famillyName":"de Mahieu - Doat", "lastName":"de Mahieu Doat", "firstName":"Aurore", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20201224_172949.jpg?alt=media&token=33a80b0d-66e7-4add-96f1-99076e019998", "birthDateText":"18/01/2016", "deathDateText":""},
    {"creationDate":"24-12-20", "generation":4, "famillyName":"de Mahieu - Doat", "lastName":"de Mahieu Doat", "firstName":"Gabriel", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FGabriel%20de%20Mahieu.jpg?alt=media&token=a7ac1594-94ef-4c1e-bc1f-0941740b5418", "birthDateText":"08/02/2017", "deathDateText":""},
    {"creationDate":"22-12-20", "generation":4, "famillyName":"de Mahieu - Doat", "lastName":"de Mahieu Doat", "firstName":"Louise", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201125_203350.jpg?alt=media&token=957c95ed-9725-44c7-9e51-497e350dd94e", "birthDateText":"06/04/2018", "deathDateText":""},
 
]



const Family = () => {
    return ( 
        <>
            <Table 
                tabParents={tabParents}
                tabEnfants1={tabEnfants1}
                numberParent="3"
            />
        </>
     );
}
 
export default Family;