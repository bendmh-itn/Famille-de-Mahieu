import React, {useContext, useState, useEffect} from 'react';
import '../App.css';
import fireBase from '../firebase';
import { storage } from '../firebase';
import {UserContext} from '../Components/Providers/UserProvider';
import { AllDataInOptions, FindOnePersonByNumberFamilly, FindOnePersonByEmail, ChildrenInOptions } from '../Functions/FilterData';
import SelectPerson from '../Components/selectModifyPerson';
import { getData, copyData } from '../Functions/FilterData';
import Compressor from 'compressorjs';
import ControlledCarousel from '../Components/CarouselBootstrap'
import SpinnerBootstrap from '../Components/spinnerBootstrap';
import { ACTUAL_GENERATION } from '../constant';
import { NavLink } from "react-router-dom";
import ModalAddPeople from '../Components/modal/modalAddPeople';

const ConfirmEmail = () => {

    const [emailUser, setEmailUser] = useState("");
    const [options, setOptions] = useState([]);
    const [message, setMessage] = useState("");
    const [id, setId] = useState("");
    const [picture, setPicture] = useState("");
    const [confirmedAccount, setConfirmedAccount] = useState(true);
    const [pictureChanged, setPictureChanged] = useState(false);
    const [myClass, setMyClass] = useState("backCard");
    const [dataCharged, setDataCharged] = useState("");
    const [personSelect, setPersonSelect] = useState([]);
    const [loading, setLoading] = useState(false);

    
    const value = useContext(UserContext);

    const addEmailUser = () => {
        personSelect.email = emailUser;
        fireBase.ModifyUserFireBase(id, personSelect).then(() => {
            setMessage("Votre adresse a bien été ajoutée.");
            window.location.reload();
          })
          .catch((error) => {
            setMessage("Error writing document: " + error);
          });
    }

    const handleCompressedUpload = (e) => {
        const { name } = e.target;
        const image = e.target.files[0];
        setPersonSelect({
            ...personSelect,
            [name]: image
        });
        
        new Compressor(image, {
          quality: 0.5, // 0.6 can also be used, but its not recommended to go below.
          success: (compressedResult) => {
            // compressedResult has the compressed file.
            // Use the compressed file to upload the images to your server.
            setPicture(compressedResult);
            setPictureChanged(true);
          },
        });
      };

    const modifyPersonSelect = (e) => {
        window.scroll(0,0);
        if(e !== null){
            let numberFamilly = e.split('/')[1];
            const person = FindOnePersonByNumberFamilly(numberFamilly);
            if(person.email === undefined){
                person.email = "";
            }
            setPersonSelect(person);
            fireBase.FindIdPerson(numberFamilly)
            .then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.id)
				setId(data[0]);
			});
        }
        setMyClass("backCard");
    }

    const modifyPerson = () => {
        setLoading(true);
        if(!pictureChanged){
            fireBase.ModifyUserFireBase(id, personSelect).then(() => {
                setMessage("Vos données ont bien été modifiées");
                window.location.reload(false);
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
                            fireBase.ModifyUserFireBase(id, personSelect, pictureName).then(() => {
                                    setMessage("Vos données ont bien été modifiées");
                                    window.location.reload(false);
                                })
                                .catch((error) => {
                                setMessage("Error writing document: " + error);
                                });
                        });
                }
            )
        }
        setMyClass("frontCard");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonSelect({
            ...personSelect,
            [name]: value
        });
    };
    
    useEffect(() => {
        const ChargeData = () => {
            let userMail;
            if(value !== null){
                userMail = value.email;
                setEmailUser(value.email);
                fireBase.FindEmailPerson(userMail)
                .then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.id);
                    if(data[0] !== undefined){
                        setId(data[0]);
                        setConfirmedAccount(true);
                        const person = FindOnePersonByEmail(userMail);
                        if(person !== undefined){
                            setPersonSelect(person);
                            setOptions(ChildrenInOptions(person.numberFamilly, person.generation))
                        }
                        setDataCharged(value);
                    }else {
                        setOptions(AllDataInOptions());
                        setConfirmedAccount(false);
                        setDataCharged(value);
                    }
                });
            }
        }

        let dataStored = getData();
        if(dataStored.length === 0){
            fireBase.findAll()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.data());
				copyData(data);
                ChargeData();
			})
        }else{
            ChargeData();
        }
    },[value]);

    return ( 
        <>
            <div className='container mt-4'>
            {
                dataCharged === "" &&
                <div>
                    <h2>Les données arrivent. Soyez patient</h2>
                </div>
            }
            {
                dataCharged !== "" && !confirmedAccount &&
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
                dataCharged !== "" && confirmedAccount &&
                <div>
                    <h2>Votre profil</h2>
                    {
                        personSelect.status === "admin" && 
                        <NavLink className="navbar-brand" to="/admin/users"><button className='btn btn-info text-white'>Admin</button></NavLink>
                    }
                    {
                        personSelect.generation !== ACTUAL_GENERATION &&
                        <div className="form-group">
                            <label>Date de mariage</label>
                            <input className="form-control" name='dateMariage' value={personSelect.dateMariage || ''} placeholder="Date de mariage" onChange={handleChange}/>
                        </div>
                    }
                    <div className="form-group">
                        <label>Nom</label>
                        <input className="form-control" name='lastName' value={personSelect.lastName || ''} placeholder="Nom..." onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Prénom</label>
                        <input className="form-control" name='firstName' value={personSelect.firstName || ''} placeholder="Prénom..." onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Date de naissance</label>
                        <input className="form-control" name='birthDate'  value={personSelect.birthDate || ''} placeholder="Date de naissance..." onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" name='email' value={personSelect.email === undefined ? "" : personSelect.email} placeholder="Email..." onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Image profil</label>
                        <input className="form-control" name='pictureName' type="file" onChange={handleCompressedUpload} />
                    </div>
                    <div className="row align-items-center mb-4">
                    {
                        !loading && 
                        <div className="col-sm mt-4">
                            <button className="btn btn-secondary m-4" onClick={modifyPerson} >
                                Modifier
                            </button>
                        </div>
                    }
                    {
                        !loading && 
                        <div className="col-sm">
                            <button className="btn btn-primary m-4" data-toggle="modal" data-target="#addPeople" >
                                Ajouter une personne
                            </button>
                        </div>
                    }


                    {
                        loading && 
                        <div className="col-sm mt-4">
                            <SpinnerBootstrap />
                        </div>
                    }
                    </div>
                    <ModalAddPeople personSelect={personSelect} />
                    <div className={'alert alert-success ' + myClass} role="alert">
                        <p>{message}</p>
                    </div>
                    {
                        options.length !== 1 && 
                        <div>
                            <h4>Pour modifier une personne de votre famille, sélectionne-le dans la liste ci-dessous</h4>
                            <SelectPerson
                                data={options}
                                modifyPerson={modifyPersonSelect}
                                isClearable={false}
                            />
                        </div>
                    }
                    {
                        personSelect.PhotosHistory && 
                        <>
                            <h2 className='mt-4 mb-0'>Votre historique photo</h2>
                            <ControlledCarousel 
                                person={personSelect}
                                id={id}
                            />
                        </>
                    }
                </div>
            }
            </div>
        </>
     );
}
 
export default ConfirmEmail;