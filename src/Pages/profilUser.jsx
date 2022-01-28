import React, {useContext, useState, useEffect} from 'react';
import '../App.css';
import fireBase from '../firebase';
import { storage } from '../firebase';
import {UserContext} from '../Components/Providers/UserProvider';
import { AllDataInOptions, FindOnePersonByNumberFamilly, FindOnePersonByEmail, ChildrenInOptions } from '../Functions/FilterData';
import SelectPerson from '../Components/selectModifyPerson';

const ConfirmEmail = () => {

    const [emailUser, setEmailUser] = useState("");
    const [options, setOptions] = useState([]);
    const [message, setMessage] = useState("");
    const [id, setId] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [numberFamilly, setNumberFamilly] = useState(0);
    const [generation, setGeneration] = useState("");
    const [famillyName, setFamillyName] = useState("");
    const [picture, setPicture] = useState("");
    const [dateMariage, setDateMariage] = useState("");
    //const [description, setDescription] = useState("");
    const [confirmedAccount, setConfirmedAccount] = useState(false);
    const [pictureChanged, setPictureChanged] = useState(false);
    const [myClass, setMyClass] = useState("backCard");

    
    const value = useContext(UserContext);

    const addEmailUser = () => {
        fireBase.ModifyUserFireBase(id,lastName, firstName, birthDate, numberFamilly, generation, picture, famillyName, dateMariage, emailUser).then(() => {
            setMessage("Votre adresse a bien été ajouté.");
            setMyClass("frontCard");
          })
          .catch((error) => {
            setMessage("Error writing document: " + error);
          });
    }

    const modifyPersonSelect = (e) => {
        if(e !== null){
            let numberFamilly = e.split('/')[1];
            const person = FindOnePersonByNumberFamilly(numberFamilly);
            person.dateMariage = person.dateMariage === undefined ? "" : person.dateMariage;
            person.description = person.description === undefined? "" : person.description;
            setLastName(person.lastName);
            setFirstName(person.firstName);
            setGeneration(person.generation);
            setNumberFamilly(person.numberFamilly);
            setBirthDate(person.birthDate);
            setFamillyName(person.famillyName);
            setPicture(person.pictureName);
            setDateMariage(person.dateMariage);
            fireBase.FindIdPerson(numberFamilly)
            .then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.id);
				setId(data[0]);
			});
        }else{
            RefreshField();
        }
    }



    const onChangePicture = e => {
        setPicture(e.target.files[0]);
        setPictureChanged(true);
    };

    const modifyPerson = () => {
        if(!pictureChanged){
            fireBase.ModifyUserFireBase(id, lastName, firstName, birthDate, numberFamilly, generation, picture, famillyName, dateMariage, emailUser).then(() => {
                setMessage("Vos données ont bien été modifié");
              })
              .catch((error) => {
                setMessage("Error writing document: " + error);
              });
        }else{
            const uploadTask = storage.ref(`images/${picture.name}`).put(picture);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    setMessage("Error writing document: " + error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(picture.name)
                        .getDownloadURL()
                        .then(pictureName => {
                            fireBase.ModifyUserFireBase(id, lastName, firstName, birthDate, numberFamilly, generation, pictureName, famillyName, dateMariage, emailUser).then(() => {
                                setMessage("Vos données ont bien été modifié");
                                })
                                .catch((error) => {
                                setMessage("Error writing document: " + error);
                                });
                        });
                }
            )
        }
    }

    function RefreshField (){
        setId("");
        setLastName("");
        setFirstName("");
        setGeneration("");
        setNumberFamilly("");
        setBirthDate("");
        setFamillyName("");
        setDateMariage("");
    }
    
    useEffect(() => {
        if(value !== null){
            setEmailUser(value.email);
            setOptions(AllDataInOptions());
        }
        fireBase.FindEmailPerson(emailUser)
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.id);
            console.log(data);
            if(data[0] !== undefined){
                setId(data[0]);
                setConfirmedAccount(true);
                const person = FindOnePersonByEmail(emailUser);
                console.log(person);
                person.dateMariage = person.dateMariage === undefined ? "" : person.dateMariage;
                setLastName(person.lastName);
                setFirstName(person.firstName);
                setGeneration(person.generation);
                setNumberFamilly(person.numberFamilly);
                setBirthDate(person.birthDate);
                setFamillyName(person.famillyName);
                setPicture(person.pictureName);
                setDateMariage(person.dateMariage);
                setOptions(ChildrenInOptions(person.numberFamilly, person.generation))
            }
        });
    },[emailUser]);

    return ( 
        <>
            <div className='container'>
            {
                emailUser === "" &&
                <h3>Reviens à la page d'accueil : Famille de Mahieu</h3>
            }
            {
                emailUser !== "" && !confirmedAccount &&
                <div>
                    <p>Votre adresse mail : <span className='email'>{emailUser}</span></p>
                    <p>Ce sera votre adresse pour modifier vos données</p>
                    <p>Trouve ton nom dans la liste pour ajouter ton adresse mail à ton compte</p>
                    <div className="alert alert-danger" role="alert">
                        Ne te trompe surtout pas
                    </div>
                    <SelectPerson
                        data={options}
                        modifyPerson={modifyPersonSelect}
                    />
                    
                    <button className='btn btn-success mt-4 mb-4' onClick={addEmailUser}>Valider</button>
                    <div className={'alert alert-success ' + myClass} role="alert">
                        <p>{message}</p>
                    </div>
                </div>
            }
            {
                confirmedAccount &&
                <div>
                    <h2>Votre profil</h2>
                    <div className="form-group">
                        <label>Date de mariage</label>
                        <input className="form-control" value={dateMariage} placeholder="Date de mariage" onChange={e => setDateMariage(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Nom</label>
                        <input className="form-control" value={lastName} placeholder="Nom..." onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Prénom</label>
                        <input className="form-control" value={firstName} placeholder="Prénom..." onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Date de naissance</label>
                        <input className="form-control" value={birthDate} placeholder="Date de naissance..." onChange={e => setBirthDate(e.target.value)}/>
                    </div>
                    {/*<div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" value={description} placeholder="Votre description..." onChange={e => setDescription(e.target.value)}/>
                    </div>*/}
                    <div className="form-group">
                        <label>Image profil</label>
                        <input className="form-control" type="file" onChange={onChangePicture} />
                    </div>
                    <button className="btn btn-secondary m-4" onClick={modifyPerson} >
                        Modifier
                    </button>
                    <p>{message}</p>
                    {
                        options.length !== 1 && 
                        <div>
                            <h4>Pour modifier une personne de votre famille, sélectionne-le dans la liste ci-dessous</h4>
                            <SelectPerson
                                data={options}
                                modifyPerson={modifyPersonSelect}
                            />
                        </div>
                    }
                </div>
            }
            </div>
        </>
     );
}
 
export default ConfirmEmail;