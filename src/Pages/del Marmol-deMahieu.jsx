import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"25-12-20", "generation":3, "famillyName":"del Marmol - de Mahieu", "lastName":"del Marmol", "firstName":"Maximilien", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FCapture%20d%E2%80%99e%CC%81cran%202020-01-19%20a%CC%80%2020.26.10.png?alt=media&token=3e39355e-2f64-4670-8d10-295649216ab5", "birthDateText":"27/05/1993", "deathDateText":""},
    {"creationDate":"25-12-20", "generation":3, "famillyName":"del Marmol - de Mahieu", "lastName":"de Mahieu", "firstName":"Valentine", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fphoto%20Valentine%20Dm.png?alt=media&token=d18b1c70-6a95-4d5d-8dc9-3b138650a4df", "birthDateText":"27/04/1995", "deathDateText":""},
 ]

const Family = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return ( 
        <>
            <AllTable 
                tabParents={tabParents}
            />
        </>
     );
}
 
export default Family;