import React, { useEffect } from 'react';
import AllTable from '../Components/AllTables'

const tabParents = [
    {
        "creationDate": "31-01-21",
        "generation": 2,
        "famillyName": "de Mahieu - van Havre",
        "lastName": "de Mahieu",
        "firstName": "Cédric",
        "pictureName": "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_0033.jpeg?alt=media&token=2e169a7c-6468-4ec2-a026-7ee30e8f40bb",
        "birthDateText": "08/03/1958",
        "deathDateText": "",
        "MyNumber": 4
      },
      {
        "creationDate": "31-01-21",
        "generation": 2,
        "famillyName": "de Mahieu - van Havre",
        "lastName": "van Havre",
        "firstName": "Pascale",
        "pictureName": "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_2957.jpeg?alt=media&token=9684577b-16bd-44af-9f0e-4b83344b57ed",
        "birthDateText": "22/03/1964",
        "deathDateText": "",
        "MyNumber": 40
      },
]

const tabEnfants1 = [
    {
        "creationDate": "23-12-20",
        "generation": 3,
        "famillyName": "de Mahieu - van Havre",
        "lastName": "de Mahieu",
        "firstName": "Darius",
        "pictureName": "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F2E2BDCD3-9EFC-40EC-80E8-1AB4C490B6F5.jpeg?alt=media&token=90b44c48-e615-41c0-875c-8e6763c82b4e",
        "birthDateText": "24/01/1994",
        "deathDateText": "",
        "MyNumber": 41
      },
      {
        "creationDate": "24-12-20",
        "generation": 3,
        "famillyName": "de Mahieu - van Havre",
        "lastName": "de Mahieu",
        "firstName": "Alaric",
        "pictureName": "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FPicture.png?alt=media&token=ec6f0847-f21a-46f1-a616-2b6ce247e6f9",
        "birthDateText": "01/07/1996",
        "deathDateText": "",
        "MyNumber": 42
      }
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