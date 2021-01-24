import React from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {"creationDate":"27-12-20", "generation":3, "famillyName":"BOUDOUL - van DELFT", "lastName":"Boudoul", "firstName":"Fabien", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F959E1A44-28CC-4206-A048-54B043928A4E.jpeg?alt=media&token=e9394637-5697-458a-8dcf-7e2c632f5c6f", "birthDateText":"08/09/1984", "deathDateText":""},
    {"creationDate":"27-12-20", "generation":3, "famillyName":"BOUDOUL - van DELFT", "lastName":"van Delft Boudoul", "firstName":"Magali", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F7D93E3CA-C535-4494-8666-7BE5B1FF5EA6.jpeg?alt=media&token=3d4a485c-2523-427e-b8b8-479a2c67df86", "birthDateText":"25/05/1987", "deathDateText":""},
 
]

const tabEnfants1 = [
    {"creationDate":"27-12-20", "generation":4, "famillyName":"BOUDOUL - van DELFT", "lastName":"BOUDOUL ", "firstName":"Antoine", "pictureName":"https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F50D12CCB-DFB7-4E07-8FB5-9C34794AFD9B.jpeg?alt=media&token=6aa1f81f-43d4-4db0-a17a-eecdeef85d2c", "birthDateText":"26/10/2018", "deathDateText":""},
  
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