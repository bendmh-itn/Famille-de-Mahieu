import React, {useEffect, useState} from 'react';
import { CSVLink } from "react-csv";
import fireBase, { CreateUserFromCSV, getEvents } from '../../firebase';
import Papa from "papaparse";
import { saveAs } from 'file-saver';
import { getUserData } from '../../Functions/cache';
import NavBarAdmin from '../../Components/navBar/navBarAdmin';

const AdminExportData = () =>  {

    const [data, setData] = useState([]);
    const [personStatus, setPersonStatus] = useState("");

      useEffect(() => {
        const userData = getUserData();
        if(userData.data !== undefined){
            setPersonStatus(userData.data.status);
        }
        getEvents()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.data());
				setData(data);
			})
    }, []);

    return (
        <>
        {
                (!personStatus || personStatus !== "admin") && 
                <div>Bien essayé mais tu n'as pas le droit de venir ici</div>
            }
            {
                personStatus && personStatus === "admin" && 
                <>
                    <NavBarAdmin />
                    <h1>test</h1>
                    <CSVLink data={data}>Download me</CSVLink>;
                    <input
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={(e) => {
                      const files = e.target.files;
                      if (files) {
                        Papa.parse(files[0], {
                          complete: function(results) {
                              for(let i = 1; i < results.data.length; i++){
                                CreateUserFromCSV(results.data[i]);
                              }
                          }}
                        )
                      }
                    }}
                  />
                </>
            }
      </>
    );

}

export default AdminExportData;