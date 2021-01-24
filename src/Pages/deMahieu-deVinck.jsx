import React from 'react';
import Table from '../Components/tableau'
import TableGSM from '../Components/TableGSM';

const tabParents = [
    {"creationDate":"21-12-20", "generation":2, "famillyName":"de Mahieu-de Vinck", "lastName":"de Mahieu ", "firstName":"Patrick", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20201221_154411.jpg?alt=media&token=f0f4c5f8-1c1b-4c63-bcfe-176718134250", "birthDateText":"15/07/1960", "deathDateText":""},
    {"creationDate":"21-12-20", "generation":2, "famillyName":"de Mahieu-de Vinck", "lastName":"de Vinck", "firstName":"Anne", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fanne%20de%20vinck.jpg?alt=media&token=39f99980-f292-463f-9907-03228d58d180", "birthDateText":"28/05/1962", "deathDateText":""},
]

const tabEnfants1 = [
    {"link" : "deMahieu-Doat", "creationDate":"22-12-20", "generation":3, "famillyName":"de Mahieu - Doat", "lastName":"De Mahieu", "firstName":"Jean Baptiste ", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201209_212137.jpg?alt=media&token=bfbbcc0c-4657-4637-8123-deca5199b465", "birthDateText":"11/08/1986", "deathDateText":""},
    {"link" : "deMahieu-Tock", "creationDate":"21-12-20", "generation":3, "famillyName":"de Mahieu-Tock", "lastName":"de Mahieu", "firstName":"Pierre", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201103_113100.jpg?alt=media&token=9d15aa9b-88c5-47a3-893c-1b434ccc3676", "birthDateText":"07/03/1988", "deathDateText":""},
    {"link" : "de Mahieu - Aerts", "creationDate":"30-12-20", "generation":3, "famillyName":"de Mahieu - Aerts", "lastName":"de Mahieu", "firstName":"Anne-Sophie", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Freceived_128401348591378.jpeg?alt=media&token=4a41e527-8490-4345-b5d3-7330ac6841c5", "birthDateText":"08/01/1990", "deathDateText":""},
    {"link" : "deMahieu-D'herde", "creationDate":"20-12-20", "generation":3, "famillyName":"de Mahieu - D'herde", "lastName":"de Mahieu", "firstName":"Benoit", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FBenoit%20de%20Mahieu.jpg?alt=media&token=41ae6741-2b05-4168-bfe7-162d053215f2", "birthDateText":"15/10/1991", "deathDateText":""},
    
]

const tabEnfants2 = [
    {"link" : "deMahieu-Henry de Frahan", "creationDate":"21-12-20", "generation":3, "famillyName":"de Mahieu - henry de frahan", "lastName":"De Mahieu", "firstName":"Francois", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FFB_IMG_1608557548047.jpg?alt=media&token=a27eae8c-e2df-4d0e-8ae9-f002ca6e41c5", "birthDateText":"20/03/1994", "deathDateText":""},
    {"creationDate":"23-12-20", "generation":3, "famillyName":"de Mahieu-de Vinck", "lastName":"de Mahieu", "firstName":"Marie", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_6358.jpg?alt=media&token=f5c15910-7226-4488-9985-282ab74d3833", "birthDateText":"13/10/1996", "deathDateText":""},
    {"creationDate":"21-12-20", "generation":3, "famillyName":"de Mahieu-de Vinck", "lastName":"de Mahieu ", "firstName":"Claire ", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F74310294_1163831300481112_2176718837548843008_n.jpg?alt=media&token=d968a2a4-678b-41e3-aa73-c47ed21911a5", "birthDateText":"17/05/2000", "deathDateText":""},
    {"creationDate":"23-12-20", "generation":3, "famillyName":"de Mahieu-de Vinck", "lastName":"de Mahieu", "firstName":"Martin", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Freceived_927361157642415.jpeg?alt=media&token=6bf325a3-d5d0-4552-ace3-dbb377f99afd", "birthDateText":"17/05/2000", "deathDateText":""},
]

const Family = () => {
    return ( 
        <>
            <div className="d-none d-sm-none d-md-block">
            <Table 
                tabParents={tabParents}
                tabEnfants1={tabEnfants1}
                tabEnfants2={tabEnfants2}
                numberParent="2"
            />
            </div>
            <div className="d-block d-sm-block d-md-none">
                <TableGSM 
                    tabParents={tabParents}
                    tabEnfants1={tabEnfants1}
                    tabEnfants2={tabEnfants2}
                    numberParent="2"
                />
            </div>
        </>
     );
}
 
export default Family;