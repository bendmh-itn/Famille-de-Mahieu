import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {
        "creationDate": "02-02-21",
        "generation": 2,
        "famillyName": "de Mahieu - Godin",
        "lastName": "de Mahieu",
        "firstName": "Louis",
        "pictureName": "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20210131_215535.jpg?alt=media&token=0e5c113d-dc1b-420a-93a6-1ff753823463",
        "birthDateText": "27/07/1959",
        "deathDateText": "",
        "MyNumber": 5
      },
      {
        "creationDate": "02-02-21",
        "generation": 2,
        "famillyName": "de Mahieu - Godin",
        "lastName": "Godin",
        "firstName": "Charlotte",
        "pictureName": "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20210131_220434.jpg?alt=media&token=7f651af2-ac42-48a6-8d54-f3ab46625cfc",
        "birthDateText": "27/02/1965",
        "deathDateText": "",
        "MyNumber": 50
      },
]

const tabEnfants1 = [
    {
        "creationDate": "02-02-21",
        "generation": 3,
        "famillyName": "de Mahieu - Godin",
        "lastName": "de Mahieu",
        "firstName": "Charles-Antoine",
        "pictureName": "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20210201_134832.jpg?alt=media&token=7ae5d2ff-f903-4284-b77d-5ebb5eb1bdcc",
        "birthDateText": "13/02/1994",
        "deathDateText": "",
        "MyNumber": 53
      },
      {
        "creationDate": "02-02-21",
        "generation": 3,
        "famillyName": "de Mahieu - Godin",
        "lastName": "de Mahieu",
        "firstName": "Jean-Guillaume",
        "pictureName": "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20210201_134818.jpg?alt=media&token=2c93efa4-6404-437b-9a1c-a009dd7437cb",
        "birthDateText": "10/05/1995",
        "deathDateText": "",
        "MyNumber": 54
      },
]

const tabEnfants2 = [
    {
        "creationDate": "02-02-21",
        "generation": 3,
        "famillyName": "de Mahieu - Godin",
        "lastName": "de Mahieu",
        "firstName": "Simon-Pierre",
        "pictureName": "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20210201_121520.jpg?alt=media&token=5ea6a8a6-189d-499f-8a6c-5a21cb776688",
        "birthDateText": "28/12/1999",
        "deathDateText": "",
        "MyNumber": 56
      },
      {
        "creationDate": "02-02-21",
        "generation": 3,
        "famillyName": "de Mahieu - Godin",
        "lastName": "de Mahieu",
        "firstName": "Yves-Albert",
        "pictureName": "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20210201_103910.jpg?alt=media&token=39701910-2685-41fb-8818-a0faa7607906",
        "birthDateText": "21/05/2002",
        "deathDateText": "",
        "MyNumber": 57
      },         
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
                tabEnfants2={tabEnfants2}
            />
        </>
     );
}
 
export default Family;