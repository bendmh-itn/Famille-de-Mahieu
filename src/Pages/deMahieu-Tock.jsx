import React from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"21-12-20", "generation":3, "famillyName":"de Mahieu-Tock", "lastName":"de Mahieu", "firstName":"Pierre", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201103_113100.jpg?alt=media&token=9d15aa9b-88c5-47a3-893c-1b434ccc3676", "birthDateText":"07/03/1988", "deathDateText":""},
    {"creationDate":"25-12-20", "generation":3, "famillyName":"de Mahieu-Tock", "lastName":"Tock", "firstName":"Isabelle", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201213_152441.jpg?alt=media&token=333c4488-1780-442f-b586-0bf359a6dc71", "birthDateText":"02/09/1988", "deathDateText":""},
]

const tabEnfants1 = [
    {"creationDate":"25-12-20", "generation":4, "famillyName":"de Mahieu-Tock", "lastName":"de Mahieu ", "firstName":"Virgile", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201104_100634.jpg?alt=media&token=f07ef692-b1b9-4244-93fe-4ca6e7bb30ee", "birthDateText":"16/03/2015", "deathDateText":""},
    {"creationDate":"25-12-20", "generation":4, "famillyName":"de Mahieu-Tock", "lastName":"de Mahieu", "firstName":"Martial", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201211_210031.jpg?alt=media&token=b9f6bbe5-7a70-48db-8b81-bf01a137b214", "birthDateText":"26/06/2019", "deathDateText":""},
    ]



const PatrickdeMahieu = () => {
    return ( 
        <>
            <AllTable 
                tabParents={tabParents}
                tabEnfants1={tabEnfants1}
            />
        </>
     );
}
 
export default PatrickdeMahieu;