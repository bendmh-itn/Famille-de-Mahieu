import React, {useState, useEffect} from 'react';
import NavBarAdmin from '../../Components/navBar/navBarAdmin';
import SelectPerson from '../../Components/selectModifyPerson';
import { addEmail, changeStatus, getEmailInOption, AddEmailAddressWithCSV, deleteEmailFirebase } from '../../firebase';
import { getUserData } from '../../Functions/cache';
import Papa from "papaparse";
import { AllDataInOptions } from '../../Functions/FilterData';

const AdminAddEmail = () => {

    const [personStatus, setPersonStatus] = useState("");
    const [personSelected, setPersonSelected] = useState({email: "", id: ""});
    const [idEmail, setIdEmail] = useState("");
    const [listEmails, setListEmails] = useState([]);
    const [listUsers, setListUsers] = useState([]);
    const [message, setMessage] = useState("");

    const selectEmail = (e) => {
        if(e !== null){
            let emailSelected = e.split('email:')[0];
            let idSelected = e.split('email:')[1];
            setPersonSelected({
                ...personSelected,
                "email": emailSelected
            });
            setIdEmail(idSelected);
        }
    }

    const selectPerson = (e) => {
        if(e !== null){
            setPersonSelected({
                ...personSelected,
                "id": e
            });
        }
    }

    const attributeEmail = () => {
        changeStatus(idEmail, "vérifié").then(() => {
            addEmail(personSelected.id, personSelected.email).then(() => {
                setMessage("Vos données ont bien été modifiées");
              })
              .catch((error) => {
                setMessage("Error writing document: " + error);
              });
        })
    }

    const deleteEmail = () => {
        deleteEmailFirebase(idEmail).then(() => {
            setMessage("L'email a été supprimé")
        })
        .catch((error) => {
            setMessage("Error writing document: " + error);
          });
    }

    useEffect(() => {
        const userData = getUserData();
        if(userData.data !== undefined){
            setPersonStatus(userData.data.status);
        }
        getEmailInOption().then((results) => {
            setListEmails(results);
        })
        setListUsers(AllDataInOptions());
        
    }, [message]);
    

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
                    <h1>Gestion des emails</h1>
                    <h3>Liste des adresses mails non validées</h3>
                    <SelectPerson data={listEmails} modifyPerson={selectEmail} />
                    <div className='text-center'><button className='btn btn-danger mt-4' onClick={deleteEmail}>Supprimer email</button></div>
                    <h3 className='mt-4'>Liste des personnes sans email</h3>
                    <SelectPerson data={listUsers} modifyPerson={selectPerson} />

                    <div className='text-center'><button className='btn btn-primary mt-4' onClick={attributeEmail}>Attribuer</button></div>
                    <div className='alert alert-success mt-3' role="alert">
                        <p>{message}</p>
                    </div>

                    <h4>Ajouter des adresses mails</h4>
                    <input
                        type="file"
                        accept=".csv,.xlsx,.xls"
                        onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                            console.log(files[0]);
                            Papa.parse(files[0], {
                            complete: function(results) {
                                for(let i = 1; i < results.data.length; i++){
                                    AddEmailAddressWithCSV(results.data[i]);
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
 
export default AdminAddEmail;